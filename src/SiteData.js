import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./components/ApiBinance/HikersAPI";
export const SiteDataContext = createContext();

const SiteData = ({ children }) => {
  const [user_data, setUserData] = useState();
  const [wallet_list, setWalletList] = useState([]);
  const [is_data_ready, setDataReady] = useState(false);
  const [error_message, setErrorMessage] = useState("");
  const [pair, setPair] = useState("BTCUSDT");

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
      return false;
    } else {
      // loginid, username, full_name, email, phone, date_joined
      setUserData(data);
      localStorage.setItem("user_data", JSON.stringify(data));
      await fetchWalleList();
      setDataReady(true);
      return true;
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("user_data");
    setUserData(null);
    setWalletList([]);
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
        pair,
        setPair,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteData;
