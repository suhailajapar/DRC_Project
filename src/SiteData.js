import { createContext, useEffect, useState } from "react";

export const SiteDataContext = createContext();

const SiteData = ({ children }) => {
  const [user_data, setUserData] = useState(null);
  const [error_message, setErrorMessage] = useState("Ok");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_data"));
    if (data) {
      setUserData(data);
    }
  }, []);

  const handleLogin = async (user_data) => {
    if (!user_data) return;
    const login_credentials = {
      ...user_data,
    };
    const req = new Request("http://192.168.100.140:3001/user/login", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(login_credentials),
    });

    const res = await fetch(req);
    const data = await res.json();
    console.log(data);
    if (data.message) {
      setErrorMessage(data.message);
    } else {
      // loginid, username, full_name, email, phone, date_joined, user_img
      setUserData(data);
      localStorage.setItem("user_data", JSON.stringify(data));
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("user_data");
    setUserData(null);
  };

  return (
    <SiteDataContext.Provider
      value={{ user_data, error_message, handleLogin, handleLogout }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteData;
