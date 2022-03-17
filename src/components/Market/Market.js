<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./Market.css";
import Marketbar from "../Menubar/HeaderBar";
import MGainSlider from "./MGainSlider";
import MLossSlider from "./MLossSlider";
import BuySellTabs from "./BuySellTabs";
import SideBar from "../Menubar/FinalTestBar";
import Menubar from "./../Menubar/Menubar";
import Footer from "./../Footer/Footer";
import Candlestickchart from "./Candlestickchart";
import Loader from "./Loader";

function Market() {
  const [theme, setTheme] = React.useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = `${month} ${""} ${currentDate.getDate()},${currentDate.getFullYear()}`;

  return (
    <div className="marketBG">
      {/* <Menubar theme={theme} setTheme={setTheme} /> */}
      <div className="market-layout">
        <div className="market-bar-section">
          <Marketbar titleName={"Market"} theme={theme} setTheme={setTheme} />
        </div>
        <div className="title-section">
          <span id="current-date-display">{date}</span>
          <span>{currentTime}</span>
        </div>
        <div className="graph-section">
          <Candlestickchart />
        </div>
        <div className="buysell-section">
          <BuySellTabs theme={theme} setTheme={setTheme} />
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
      {/* <Footer /> */}
    </div>
  );
}

export default Market;
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Market.css";
import Marketbar from "../Menubar/HeaderBar";
import MGainSlider from "./MGainSlider";
import MLossSlider from "./MLossSlider";
import BuySellTabs from "./BuySellTabs";
import Candlestickchart from "./Candlestickchart";
import { SiteDataContext } from "../../SiteData";

function Market() {
  const [theme, setTheme] = useState("dark");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { user_data, wallet_list } = React.useContext(SiteDataContext);

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
          {!user_data ? (
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
          ) : (
            ""
          )}
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
        <div className="balance-section">
          <div className="w-value">
            <p>Wallet's Balance</p>
            <h1 id="wal-bal">
              USD
              {wallet_list
                .find((w) => w.currency === "USD")
                ?.balance.toLocaleString("en-US") || "0"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
>>>>>>> 74d4bfc7393af035d4c166f958ed4fc7066161b1
