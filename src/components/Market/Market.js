import React from "react";
import "./Market.css";
import Marketbar from "../Menubar/MarBar";
import MGainSlider from "./MGainSlider";
import MLossSlider from "./MLossSlider";
import BuySellTabs from "./BuySellTabs";

function Market() {
  const [theme, setTheme] = React.useState("dark");

  return (
    <div className="marketBG">
      <div className="market-layout">
        <div className="market-bar-section">
          <Marketbar theme={theme} setTheme={setTheme} />
        </div>
        <div className="title-section box">2</div>
        <div className="graph-section box">3</div>
        <div className="buysell-section">
          <BuySellTabs />
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
