import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "./Candlestickchart.css";
import TradeViewChart from "react-crypto-chart";
import LoaderImg from "../../assets/Market Asset/Loader.svg";
import useBinanceData from "../ApiBinance/binance-data";
import annotationPlugin from "chartjs-plugin-annotation";
import Btc from "./../../assets/Icon_symbol/btc.svg";
import Eth from "./../../assets/Icon_symbol/eth.svg";
import Shib from "./../../assets/Icon_symbol/shiba.svg";
import Bnb from "./../../assets/Icon_symbol/bnb.svg";
import Slp from "./../../assets/Icon_symbol/slp.svg";
import Sol from "./../../assets/Icon_symbol/sol.svg";
import Avax from "./../../assets/Icon_symbol/avax.svg";
import Xrp from "./../../assets/Icon_symbol/xrp.svg";
import Ada from "./../../assets/Icon_symbol/ada.svg";
import Nul from "./../../assets/Icon_symbol/nuls.svg";
import Clv from "./../../assets/Icon_symbol/clv.svg";
import Matic from "./../../assets/Icon_symbol/matic.svg";
import Dia from "./../../assets/Icon_symbol/dia.svg";
import Beta from "./../../assets/Icon_symbol/beta.svg";
import Anc from "./../../assets/Icon_symbol/anc.svg";
import Luna from "./../../assets/Icon_symbol/luna.svg";
import Knc from "./../../assets/Icon_symbol/knc.svg";
import Jst from "./../../assets/Icon_symbol/jst.svg";
import Bnx from "./../../assets/Icon_symbol/bnx.svg";
import Xvs from "./../../assets/Icon_symbol/xvs.svg";
import Row from "./Row";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

Chart.register(...registerables, annotationPlugin);

const crypto_list = [
  { src: Btc, id: "BTCUSDT", name: "BTC/USDT" },
  { src: Eth, id: "ETHUSDT", name: "ETH/USDT" },
  { src: Shib, id: "SHIBUSDT", name: "SHIB/USDT" },
  { src: Bnb, id: "BNBUSDT", name: "BNB/USDT" },
  { src: Slp, id: "SLPUSDT", name: "SLP/USDT" },
  { src: Sol, id: "SOLUSDT", name: "SOL/USDT" },
  { src: Avax, id: "AVAXUSDT", name: "AVAX/USDT" },
  { src: Xrp, id: "XRPUSDT", name: "XRP/USDT" },
  { src: Ada, id: "ADAUSDT", name: "ADA/USDT" },
  { src: Nul, id: "NULSUSDT", name: "NULS/USDT" },
  { src: Clv, id: "CLVUSDT", name: "CLV/USDT" },
  { src: Matic, id: "MATICUSDT", name: "MATIC/USDT" },
  { src: Dia, id: "DIAUSDT", name: "DIA/USDT" },
  { src: Beta, id: "BETAUSDT", name: "BETA/USDT" },
  { src: Anc, id: "ANCUSDT", name: "ANC/USDT" },
  { src: Luna, id: "LUNAUSDT", name: "LUNA/USDT" },
  { src: Knc, id: "KNCUSDT", name: "KNC/USDT" },
  { src: Jst, id: "JSTUSDT", name: "JST/USDT" },
  { src: Bnx, id: "BNXUSDT", name: "BNX/USDT" },
  { src: Xvs, id: "XVSUSDT", name: "XVS/USDT" },
];

function Candlestickchart() {
  const [pair, setPair] = useState("BTCUSDT");

  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, close, volume, , percent] =
    useBinanceData(pair);

  console.log(percent);

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
            {close === 0 ? (
              <p>Loading...</p>
            ) : (
              Number.parseFloat(close).toFixed(2)
            )}
          </span>
          <span
            className={`coin-precentage ${
              Number.parseFloat(percent) > 0 ? "green" : "red"
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
        <TradeViewChart
          key={pair + interval}
          pair={pair}
          interval={interval}
          className="chart"
        />
      )}
    </div>
  );
}

export default Candlestickchart;