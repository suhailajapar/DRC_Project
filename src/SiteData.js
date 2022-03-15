import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./components/ApiBinance/HikersAPI";
import jwt_decode from "jwt-decode";

export const SiteDataContext = createContext({});

const SiteData = ({ children }) => {
  const [user_data, setUserData] = useState();
  const [wallet_list, setWalletList] = useState([]);
  const [is_data_ready, setDataReady] = useState(false);
  const [error_message, setErrorMessage] = useState("");
  const [total_asset, setTotalAsset] = useState(0);
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
      getTotalAsset();
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
      getTotalAsset();
    }
  };

  const handleLogin = async (user_data) => {
    localStorage.removeItem("user_data");
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

  const getTotalAsset = () => {
    setTotalAsset(0);
    const crypto_wallet = wallet_list.filter((w) => w.currency !== "USD");
    crypto_wallet.forEach(async (cw) => {
      const curr_price = await getCurrentCryptoPrice(cw.currency);
      setTotalAsset(
        (prev) => prev + curr_price * Number.parseFloat(cw.balance)
      );
    });
  };

  const API_ENDPOINT = "https://api.binance.com/api/v3";
  const getCurrentCryptoPrice = async (target) => {
    const response = await axios.get(
      `${API_ENDPOINT}/ticker/price?symbol=${target.toUpperCase()}USDT`
    );

    const { price } = response.data;
    return Number.parseFloat(price);
  };

  const checkJWT = () => {
    let stored_user_data = localStorage.getItem("user_data");

    let { token } = JSON.parse(stored_user_data);
    console.log(stored_user_data);
    console.log(token);
    let decodedToken = jwt_decode(token);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();

    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // console.log("Token expired. Please login again");
      localStorage.removeItem("user_data");
      return false;
    } else {
      // console.log("Valid token");
      return true;
    }
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
        total_asset,
        checkJWT,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteData;
