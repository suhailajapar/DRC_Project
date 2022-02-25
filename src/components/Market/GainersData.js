import Axios from "axios";
import { useEffect, useState } from "react";
import "./Market.css";

function DataTop() {
  const [crypto, setCrypto] = useState([]);

  var list = {};
  var specifiedArr = [];
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=20&page=1&sparkline=false"
    )
      .then((res) => {
        setCrypto(res.data);
        for (var i in res.data) {
          list = {
            cryptName: res.data[i].name,
            cryptPerc: res.data[i].price_change_percentage_24h,
          };
          specifiedArr.push(list);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(crypto.slice(0, 9));
  var tempCrypArr = [];
  var top10Arr = [];
  var btm10Arr = [];
  for (var i in crypto) {
    tempCrypArr.push(crypto[i].price_change_percentage_24h);
  }
  tempCrypArr.sort(function (a, b) {
    return a - b;
  });
  btm10Arr = tempCrypArr.slice(0, 4);
  top10Arr = tempCrypArr.reverse().slice(0, 4);

  console.log(top10Arr);
  console.log(btm10Arr);

  var top10 = [];

  for (var i in top10Arr) {
    let listTop10 = {};
    for (var j in crypto) {
      if (crypto[j].price_change_percentage_24h === top10Arr[i]) {
        console.log(crypto[j].name);
        listTop10["image"] = crypto[j].image;
        listTop10["name"] = crypto[j].name;
        listTop10["symbol"] = crypto[j].symbol;
        listTop10["percentage"] = top10Arr[i];
        listTop10["price"] = crypto[j].current_price;
        top10.push(listTop10);
      }
    }
  }
  return crypto;
}
export default DataTop;
