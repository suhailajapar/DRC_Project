import React, { useState, useEffect, useContext } from "react";
import { Chart, registerables } from "chart.js";
import "./Candlestickchart.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import TradeViewChart from "react-crypto-chart";
import LoaderImg from "../../assets/Market Asset/Loader.svg";
import useBinanceData from "../ApiBinance/binance-data";
import annotationPlugin from "chartjs-plugin-annotation";
import Btc from "./../../assets/Icon_symbol/btc.png";
import Eth from "./../../assets/Icon_symbol/eth.png";
import Shib from "./../../assets/Icon_symbol/shiba.png";
import Bnb from "./../../assets/Icon_symbol/bnb.png";
import Slp from "./../../assets/Icon_symbol/slp.png";
import Sol from "./../../assets/Icon_symbol/sol.png";
import Ltc from "./../../assets/Icon_symbol/ltc.png";
import Xrp from "./../../assets/Icon_symbol/xrp.png";
import Ada from "./../../assets/Icon_symbol/ada.png";
import Nul from "./../../assets/Icon_symbol/nuls.png";
import Clv from "./../../assets/Icon_symbol/clv.png";
import Matic from "./../../assets/Icon_symbol/matic.png";
import Doge from "./../../assets/Icon_symbol/doge.png";
import Beta from "./../../assets/Icon_symbol/beta.png";
import Anc from "./../../assets/Icon_symbol/anc.png";
import Luna from "./../../assets/Icon_symbol/luna.png";
import Knc from "./../../assets/Icon_symbol/knc.png";
import Jst from "./../../assets/Icon_symbol/jst.png";
import Bnx from "./../../assets/Icon_symbol/bnx.png";
import Xvs from "./../../assets/Icon_symbol/xvs.png";
import Row from "./Row";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightWeightChart from "../Chart/lightweight-chart";
import { SiteDataContext } from "../../SiteData";

Chart.register(...registerables, annotationPlugin);

const crypto_list = [
  { src: Btc, id: "BTCUSDT", name: "BTC/USDT", fullname: "Bitcoin" },
  { src: Eth, id: "ETHUSDT", name: "ETH/USDT", fullname: "Ethereum" },
  { src: Shib, id: "SHIBUSDT", name: "SHIB/USDT", fullname: "Shiba-Inu" },
  { src: Bnb, id: "BNBUSDT", name: "BNB/USDT", fullname: "BinanceCoin" },
  { src: Slp, id: "SLPUSDT", name: "SLP/USDT", fullname: "Smooth-Love-Potion" },
  { src: Sol, id: "SOLUSDT", name: "SOL/USDT", fullname: "Solana" },
  { src: Ltc, id: "LTCUSDT", name: "LTC/USDT", fullname: "Litecoin" },
  { src: Xrp, id: "XRPUSDT", name: "XRP/USDT", fullname: "Ripple" },
  { src: Ada, id: "ADAUSDT", name: "ADA/USDT", fullname: "Cardano" },
  { src: Nul, id: "NULSUSDT", name: "NULS/USDT", fullname: "Nuls" },
  { src: Clv, id: "CLVUSDT", name: "CLV/USDT", fullname: "Clover" },
  {
    src: Matic,
    id: "MATICUSDT",
    name: "MATIC/USDT",
    fullname: "Matic-Network",
  },
  { src: Doge, id: "DOGEUSDT", name: "DOGE/USDT", fullname: "Dogecoin" },
  { src: Beta, id: "BETAUSDT", name: "BETA/USDT", fullname: "Beta-Finance" },
  { src: Anc, id: "ANCUSDT", name: "ANC/USDT", fullname: "Anchor-Protocol" },
  { src: Luna, id: "LUNAUSDT", name: "LUNA/USDT", fullname: "Terra-Luna" },
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

function Candlestickchart() {
  const [display, setDisplay] = useState("none");
  const { pair, setPair } = useContext(SiteDataContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, close, volume, , percent] =
    useBinanceData(pair);

  const getName = (id) => crypto_list.find((c) => c.id === id).name;
  const getSrc = (id) => crypto_list.find((c) => c.id === id).src;

  const handleInterval = (event, newInterval) => {
    setLoading(true);
    setInterval(newInterval);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading]);

  return (
    <div className="app">
      {/* Ask: {parseFloat(ask).toFixed(2)} Bid: {parseFloat(bid).toFixed(2)} Open:
      {parseFloat(open).toFixed(2)} Low: {parseFloat(low).toFixed(2)} High:
      {parseFloat(high).toFixed(2)} Close: {parseFloat(close).toFixed(2)} */}
      <div>
        <div
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          Cryptocurrency
          <img alt="dropdown button" className="dropdown-icon" />
        </div>
        <div className={showDropdown ? "dropdown-box" : ""}>
          <tr className={showDropdown ? "dropdown-coin-header" : "hide-header"}>
            <td>
              <p>Symbol</p>
            </td>
            <td id="dropdown-coin-header-name">
              <p>Name</p>
            </td>
            <td>
              <p>Price</p>
            </td>
            <td>
              <p>24hr %</p>
            </td>
          </tr>
          {crypto_list.map((c) => {
            if (showDropdown) {
              return (
                <div
                  onClick={(e) => {
                    setPair(c.id);
                    setShowDropdown(!showDropdown);
                  }}
                  key={c.id}
                  className="pair-list"
                >
                  <Row key={c.id} src={c.src} pair={c.id} name={c.name} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mchart-title-and-filter">
        <div className="market-chart-title">
          <span>
            <img src={getSrc(pair)} className="crypto_logo" />
          </span>
          <span id="mchart-title-name">{getName(pair)}</span>
          <span id="mchart-title-price">
            {close === 0 ? <p>Loading...</p> : Number.parseFloat(close)}
          </span>
          <span
            className={`coin-precentage ${
              Number.parseFloat(percent) > 0 ? "arrow up" : "arrow down"
            }`}
          ></span>
          <span
            className={`coin-precentage ${
              Number.parseFloat(percent) > 0
                ? "green coin-pads"
                : "red coin-pads"
            }`}
          >
            {Number.parseFloat(percent).toFixed(2)}
          </span>
        </div>
        <div className="interval-filter">
          <ToggleButtonGroup
            value={interval}
            exclusive
            onChange={handleInterval}
            aria-label="interval filter"
            sx={{
              "& .MuiToggleButton-root": {
                backgroundColor: "#595959",
                height: "25px",
                color: "white",
                fontSize: "0.875rem",
              },
              "& .MuiToggleButton-root:hover": {
                backgroundColor: "rgb(56, 55, 55)",
              },
              "& .MuiToggleButton-root.Mui-selected": {
                color: "white",
                backgroundColor: "rgb(56, 55, 55)",
              },
            }}
          >
            <ToggleButton value="1m" aria-label="minutes">
              Min
            </ToggleButton>
            <ToggleButton value="1h" aria-label="hours">
              Hr
            </ToggleButton>
            <ToggleButton value="1d" aria-label="days">
              Day
            </ToggleButton>
            <ToggleButton value="1w" aria-label="weeks">
              Week
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* <div className="interval-filter">
          <div className="mins" onClick={() => handleInterval("1m")}>
            Min
          </div>
          <div onClick={() => handleInterval("1h")}>Hr</div>
          <div onClick={() => handleInterval("1d")}>Day</div>
          <div onClick={() => handleInterval("1w")}>Week</div>
          <div className="mos" onClick={() => handleInterval("1M")}>
            Month
          </div>
        </div> */}
      </div>

      {loading ? (
        <div className="loader">
          <img src={LoaderImg} alt="loading" />
        </div>
      ) : (
        <LightWeightChart symbol={pair} interval={interval} />
      )}
    </div>
  );
}

export default Candlestickchart;
