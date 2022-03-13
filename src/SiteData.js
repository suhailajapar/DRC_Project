import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./components/ApiBinance/HikersAPI";
// import { removeCookie } from "react-cookie";
export const SiteDataContext = createContext();

const SiteData = ({ children }) => {
  const [user_data, setUserData] = useState();
  const [wallet_list, setWalletList] = useState([]);
  const [is_data_ready, setDataReady] = useState(false);
  const [error_message, setErrorMessage] = useState("");

  useEffect(() => {
    setDataReady(false);
    const data = JSON.parse(localStorage.getItem("user_data"));
    if (data) {
      setUserData(data);
      setDataReady(true);
    }
  }, []);

  useEffect(() => {
    setDataReady(false);
    fetchWalleList().then(() => {
      setDataReady(true);
    });
  }, [user_data]);

  const fetchWalleList = async () => {
    if (user_data) {
      console.log("wallet" + user_data);
      const { loginid, token } = user_data;
      const result = await fetch(`${BASE_URL}/wallet/${loginid}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ token }),
      });
      const data = await result.json();
      setWalletList(data);
    }
  };

  const handleLogin = async (user_data) => {
    if (!user_data) return;
    const login_credentials = {
      ...user_data,
    };
    setDataReady(false);
    const req = new Request(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(login_credentials),
    });

    const res = await fetch(req);
    const data = await res.json();

    if (data.error) {
      setErrorMessage(data.error);
    } else {
      // loginid, username, full_name, email, phone, date_joined
      setUserData(data);
      localStorage.setItem("user_data", JSON.stringify(data));
      await fetchWalleList();
      setDataReady(true);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("user_data");
    setUserData(null);
    setWalletList([]);
    // removeCookie("access-token");
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
        wallet_list,
        fetchWalleList,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteData;
