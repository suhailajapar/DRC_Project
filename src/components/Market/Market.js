import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Market.css";
import Marketbar from "../Menubar/HeaderBar";
import MGainSlider from "./MGainSlider";
import MLossSlider from "./MLossSlider";
import BuySellTabs from "./BuySellTabs";
import Candlestickchart from "./Candlestickchart";

function Market() {
  const [theme, setTheme] = React.useState("dark");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const month = d.toLocaleString("default", { month: "long" });
      setDate(`${month} ${""} ${d.getDate()}, ${d.getFullYear()}`);

      const t = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(t);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="marketBG">
      <div className="market-layout">
        <div className="market-bar-section">
          <Marketbar titleName={"Market"} theme={theme} setTheme={setTheme} />
        </div>
        <div className="title-section">
          <span id="current-date-display">{date}</span>
          <span>{time}</span>
        </div>
        <div className="graph-section">
          <Candlestickchart />
        </div>
        <div className="buysell-section">
          <BuySellTabs theme={theme} setTheme={setTheme} />
          <div className="mini-message">
            Please&nbsp;
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#0ead11" }}
            >
              Log In
            </Link>
            &nbsp;or&nbsp;
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#0ead11" }}
            >
              Register
            </Link>
          </div>
        </div>

        <div className="gain-section">
          <div className="gain-title">
            <span>Top Gainer</span>
          </div>
          <div className="gain-slider">
            <MGainSlider theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className="loss-section">
          <div className="loss-title">
            <span>Top Loser</span>
          </div>
          <div className="loss-slider">
            <MLossSlider theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
