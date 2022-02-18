import React from "react";
import SideBar from "../Menubar/SideBar";
import "./Dashboard.css";
import DashHead from "../../assets/DashboardAsset/Dashboard-header.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Test() {
  return (
    <div className="DashBG">
      <SideBar />
      <div className="Layout">
        <div className="Top">
          <div className="DashLogo">
            <img src={DashHead} alt="Dashboard Logo" />
            <span className="DashHead">Dashboard</span>
          </div>
          <div className="IconsHead">
            <span className="IconText">Dark</span>
            <ToggleOnIcon fontSize="large" />
            <NotificationsIcon fontSize="large" />
            <MailIcon fontSize="large" />
          </div>
        </div>
        <div className="BoughtAssets box">2</div>
        <div className="Profile box">3</div>
        <div className="LiveCharts box">4</div>
        <div className="Wallet box">5</div>
        <div className="Pie box">6</div>
        <div className="Table box">7</div>
      </div>
    </div>
  );
}

export default Test;
