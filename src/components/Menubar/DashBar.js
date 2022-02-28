import React from "react";
import "./DashMarBar.css";
import DashLogoDark from "../../assets/DashboardAsset/DashLogoDark.svg";
import DashLogoLight from "../../assets/DashboardAsset/DashLogoLight.svg";
import ToggleSwitch from "./../ModeSwitch/Switch";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Dashbar = ({ theme, setTheme }) => {
  return (
    <div className="dash-bar">
      <div className="DashLogo">
        <img
          src={theme === "dark" ? DashLogoDark : DashLogoLight}
          className="dash-mar-logo"
          alt="Dashboard Logo"
        />
        <span className="DashHead">Dashboard</span>
      </div>
      <div className="dash-icon-head">
        <ToggleSwitch theme={theme} setTheme={setTheme} />
        <NotificationsIcon
          sx={theme === "dark" ? { color: "white" } : { color: "black" }}
          fontSize="large"
          className="dash-icon-pads"
        />
        <MailIcon
          sx={theme === "dark" ? { color: "white" } : { color: "black" }}
          fontSize="large"
        />
      </div>
    </div>
  );
};

export default Dashbar;
