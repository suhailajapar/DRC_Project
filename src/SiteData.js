import { createContext, useEffect, useState } from "react";
export const SiteDataContext = createContext();

const SiteData = ({ children }) => {
  const [user_data, setUserData] = useState();
  const [is_data_ready, setDataReady] = useState(false);
  const [error_message, setErrorMessage] = useState("Ok");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_data"));
    if (data) {
      setUserData(data);
      setDataReady(true);
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
      setDataReady(true);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("user_data");
    setUserData(null);
    window.location.pathname = "/";
  };

  return (
    <SiteDataContext.Provider
      value={{
        user_data,
        error_message,
        handleLogin,
        handleLogout,
        is_data_ready,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteData;
