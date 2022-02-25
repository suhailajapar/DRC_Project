import React from "react";
import "./Market.css";
import MarketHead from "../../assets/Market Asset/Market-header.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MGainSlider from "./MGainSlider";
import MLossSlider from "./MLossSlider";
import BuySellTabs from "./BuySellTabs";

function Market() {
  return (
    <div className="marketBG">
      <div className="market-layout">
        <div className="header-section">
          <div className="MarketLogo">
            <img src={MarketHead} alt="Market Header Logo" />
            <span className="MarketHead">Market</span>
          </div>
          <div className="market-icon-head">
            <span className="market-icon-text">Dark</span>
            <ToggleOnIcon fontSize="large" />
            <NotificationsIcon fontSize="large" className="market-icon-pads" />
            <MailIcon fontSize="large" />
          </div>
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
            <MGainSlider />
          </div>
        </div>
        <div className="loss-section">
          <div className="loss-title">
            <span>Top Loser</span>
          </div>
          <div className="loss-slider">
            <MLossSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
