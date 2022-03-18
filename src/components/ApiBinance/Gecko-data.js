import Axios from "axios";
import react, { useEffect, useState } from "react";

const useGeckoData = (symbol) => {
  const [crypto, setCrypto] = useState();
  const [time, setTime] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.coingecko.com/api/v3/coins/${symbol
        .toString()
        .toLowerCase()}/market_chart?vs_currency=usd&days=365`
    ).then((res) => {
      setCrypto(res.data);
      for (var i in res.data.prices) {
        time.push(new Date(res.data.prices[i][0]).toDateString());
      }
      for (var i in res.data.prices) {
        price.push(res.data.prices[i][1]);
      }
    });
  }, []);

  return [time, price];
};
export default useGeckoData;
