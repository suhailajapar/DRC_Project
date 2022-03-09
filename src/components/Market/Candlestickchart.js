import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "./Candlestickchart.css";
import TradeViewChart from "react-crypto-chart";
import LoaderImg from "../../assets/Market Asset/Loader.svg";
import DropdownImg from "../../assets/Market Asset/down-chevron.png";
import useBinanceData from "../ApiBinance/binance-data";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(...registerables, annotationPlugin);

const crypto_list = [
  { id: "BTCUSDT", name: "BTC/USDT" },
  { id: "ETHUSDT", name: "ETH/USDT" },
  { id: "SHIBUSDT", name: "SHIB/USDT" },
  { id: "BNBUSDT", name: "BNB/USDT" },
  { id: "SLPUSDT", name: "SLP/USDT" },
  { id: "SOLUSDT", name: "SOL/USDT" },
  { id: "AVAXUSDT", name: "AVAX/USDT" },
  { id: "XRPUSDT", name: "XRP/USDT" },
  { id: "ADAUSDT", name: "ADA/USDT" },
  { id: "NULSUSDT", name: "NULS/USDT" },
  { id: "CLVUSDT", name: "CLV/USDT" },
  { id: "MATICUSDT", name: "MATIC/USDT" },
  { id: "DIAUSDT", name: "DIA/USDT" },
  { id: "BETAUSDT", name: "BETA/USDT" },
  { id: "ANCUSDT", name: "ANC/USDT" },
  { id: "LUNAUSDT", name: "LUNA/USDT" },
  { id: "KNCUSDT", name: "KNC/USDT" },
  { id: "JSTUSDT", name: "JST/USDT" },
  { id: "BNXUSDT", name: "BNX/USDT" },
  { id: "XVSUSDT", name: "XVS/USDT" },
];

function Candlestickchart() {
  const [pair, setPair] = useState("BTCUSDT");

  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [ask, bid, open, low, high, close, volume, percent] =
    useBinanceData(pair);

  console.log(percent);

  const getName = (id) => crypto_list.find((c) => c.id === id).name;

  const handleInterval = (interval) => {
    setLoading(true);
    setInterval(interval);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading]);

  return (
    //Market chart
    <div className="app">
      Ask: {parseFloat(ask).toFixed(2)} Bid: {parseFloat(bid).toFixed(2)} Open:
      {parseFloat(open).toFixed(2)} Low: {parseFloat(low).toFixed(2)} High:
      {parseFloat(high).toFixed(2)} Close: {parseFloat(close).toFixed(2)}
      Percent: {parseFloat(percent).toFixed(2)} Volume:
      {parseFloat(volume).toFixed(2)}
      {/* DROPDOWN */}
      <div>
        <div
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          <img
            src={DropdownImg}
            alt="dropdown button"
            className="dropdown-icon"
          />
        </div>

        <div className="dropdown-box ">
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
                  <tr>
                    <td className="coinList">{c.name}</td>
                    <td className="coinList">{parseFloat(close).toFixed(2)}</td>
                    <td className="coinList">
                      {parseFloat(percent).toFixed(2) < 0 ? (
                        <p className="coin-percent red">
                          {parseFloat(percent).toFixed(2)}%
                        </p>
                      ) : (
                        <p className="coin-percent green">
                          {parseFloat(percent).toFixed(2)}%
                        </p>
                      )}
                    </td>
                  </tr>
                </div>
              );
            }
            return <></>;
          })}
        </div>
      </div>
      <div className="market-chart-title">{getName(pair)}</div>
      <div className="interval-filter">
        <div className="mins" onClick={() => handleInterval("1m")}>
          Min
        </div>
        <div onClick={() => handleInterval("1h")}>Hr</div>
        <div onClick={() => handleInterval("1d")}>Day</div>
        <div onClick={() => handleInterval("1w")}>Week</div>
        <div className="mos" onClick={() => handleInterval("1M")}>
          Month
        </div>
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
