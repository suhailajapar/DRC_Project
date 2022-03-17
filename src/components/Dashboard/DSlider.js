import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./DSlider.css";
import { styled } from "@mui/material/styles";
import Btc from "./../../assets/Icon_symbol/btc.png";
import Eth from "./../../assets/Icon_symbol/eth.png";
import Shib from "./../../assets/Icon_symbol/shiba.png";
import Bnb from "./../../assets/Icon_symbol/bnb.png";
import Slp from "./../../assets/Icon_symbol/slp.png";
import Sol from "./../../assets/Icon_symbol/sol.png";
// import Ltc from "./../../assets/Icon_symbol/ltc.png";
import Xrp from "./../../assets/Icon_symbol/xrp.png";
import Ada from "./../../assets/Icon_symbol/ada.png";
import Nul from "./../../assets/Icon_symbol/nuls.png";
import Clv from "./../../assets/Icon_symbol/clv.png";
import Matic from "./../../assets/Icon_symbol/matic.png";
// import Doge from "./../../assets/Icon_symbol/doge.png";
import Beta from "./../../assets/Icon_symbol/beta.png";
import Anc from "./../../assets/Icon_symbol/anc.png";
import Luna from "./../../assets/Icon_symbol/luna.png";
import Knc from "./../../assets/Icon_symbol/knc.png";
import Jst from "./../../assets/Icon_symbol/jst.png";
import Bnx from "./../../assets/Icon_symbol/bnx.png";
import Xvs from "./../../assets/Icon_symbol/xvs.png";
import axios from "axios";
import useBinanceData from "../ApiBinance/binance-data";
import { SiteDataContext } from "../../SiteData";
import RenderCard from "./DSliderCard";

const crypto_list = [
  { src: Btc, id: "BTCUSDT", name: "BTC/USDT", fullname: "Bitcoin" },
  { src: Eth, id: "ETHUSDT", name: "ETH/USDT", fullname: "Ethereum" },
  { src: Shib, id: "SHIBUSDT", name: "SHIB/USDT", fullname: "Shiba-Inu" },
  { src: Bnb, id: "BNBUSDT", name: "BNB/USDT", fullname: "BinanceCoin" },
  { src: Slp, id: "SLPUSDT", name: "SLP/USDT", fullname: "Smooth-Love-Potion" },
  { src: Sol, id: "SOLUSDT", name: "SOL/USDT", fullname: "Solana" },
  // { src: Ltc, id: "LTCUSDT", name: "LTC/USDT", fullname: "Litecoin" },
  { src: Xrp, id: "XRPUSDT", name: "XRP/USDT", fullname: "Ripple" },
  { src: Ada, id: "ADAUSDT", name: "ADA/USDT", fullname: "Cardano" },
  { src: Nul, id: "NULSUSDT", name: "NULS/USDT", fullname: "Nuls" },
  { src: Clv, id: "CLVUSDT", name: "CLV/USDT", fullname: "Clover" },
  {
    src: Matic,
    id: "MATICUSDT",
    name: "MATIC/USDT",
    fullname: "Matic-Network",
  }, //Change Logo
  // { src: Doge, id: "DOGEUSDT", name: "DOGE/USDT", fullname: "Dogecoin" },
  { src: Beta, id: "BETAUSDT", name: "BETA/USDT", fullname: "Beta-Finance" },
  { src: Anc, id: "ANCUSDT", name: "ANC/USDT", fullname: "Anchor-Protocol" },
  { src: Luna, id: "LUNAUSDT", name: "LUNA/USDT", fullname: "Terra-Luna" }, //Change Logo
  {
    src: Knc,
    id: "KNCUSDT",
    name: "KNC/USDT",
    fullname: "Kyber-Network-Crystal",
  },
  { src: Jst, id: "JSTUSDT", name: "JST/USDT", fullname: "Just" },
  { src: Bnx, id: "BNXUSDT", name: "BNX/USDT", fullname: "BinaryX" },
  { src: Xvs, id: "XVSUSDT", name: "XVS/USDT", fullname: "Venus" },
];

const currentPrice = "0.0009";

export default function SimpleSlider(props) {
  // let cryptoData = [];
  // const [intervalCount, setIntervalCount] = useState(0);
  // const [timer, setTImer] = useState(0)
  const { pair, setPair } = useContext(SiteDataContext);
  const [databaseData, setDatabaseData] = useState([]);
  const [ask, bid, open, low, high, close, volume, , percent] =
    useBinanceData(pair);
  // setInterval();
  const [cryptoCurrencies, setCryptoCurrencies] = useState([
    { id: "", name: "", percentage: "", price: "", src: "" },
  ]);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // useEffect(() => {
  //   clearInterval()
  //   console.log(props.backendData);
  //   setDatabaseData(props.backendData);
  // }, []);
  // useEffect(() => {
  //   console.log(databaseData);
  // }, []);

  // console.log(props.backendData);
  // console.log(props.backendData);

  // useEffect(() => {
  //   const timerCount = setInterval(() => {
  //     setIntervalCount(intervalCount + 1);
  //   }, 5000);
  //   if (intervalCount > 0) {
  //     clearInterval(timerCount);
  //   }

  //   crypto_list.forEach((element, index) => {
  //     let cryptoObj = {};
  //     cryptoObj["src"] = element.src;
  //     cryptoObj["name"] = element.name;
  //     axios
  //       .get(
  //         `https://api.binance.com/api/v3/ticker/24hr?symbols=["${element.id.toUpperCase()}"]`
  //       )
  //       .then((res) => {
  //         const data = res.data;
  //         cryptoObj["price"] = data[0].askPrice;
  //         cryptoObj["id"] = data[0].symbol;
  //         cryptoObj["percentage"] = data[0].priceChangePercent;
  //         cryptoData.push(cryptoObj);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  //   setCryptoCurrencies(cryptoData);
  // }, [intervalCount]);
  return (
    <Slider {...settings}>
      {crypto_list.map((c) => {
        return (
          <div>
            <RenderCard key={c.id} name={c.name} src={c.src} pair={c.id} />
          </div>
        );
      })}
    </Slider>
  );
}
