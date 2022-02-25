import React from "react";
import "./SideBar.css";
// import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import HomeLogo from "../../assets/DashboardAsset/Dashboard-Logo.svg";
import UserDP from "../../assets/DashboardAsset/User-profile.svg";
import MarketLogo from "../../assets/DashboardAsset/Increase.svg";
import DashLogo from "../../assets/DashboardAsset/Dashboard-Layout.svg";
import Logout from "../../assets/DashboardAsset/Logout.svg";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <a href="/">
        <img src={HomeLogo} alt="Home Logo" id="logo" />
      </a>
      <Tooltip
        title={<Typography fontSize={15}>User's Profile</Typography>}
        placement="right"
        arrow
      >
        <a href="/profile">
          <img src={UserDP} alt="User's Profile Picture" id="DP" />
        </a>
      </Tooltip>
      <Tooltip
        title={<Typography fontSize={15}>Market</Typography>}
        placement="right"
        arrow
      >
        <a href="/market">
          <img src={MarketLogo} alt="Market Logo" id="Market" />
        </a>
      </Tooltip>
      <Tooltip
        title={<Typography fontSize={15}>Dashboard</Typography>}
        placement="right"
        arrow
      >
        <a href="/dashboard">
          <img src={DashLogo} alt="Dashboard Logo" id="Dashboard" />
        </a>
      </Tooltip>
      <Tooltip
        title={<Typography fontSize={15}>Logout</Typography>}
        placement="right"
        arrow
      >
        <a href="#ey">
          <img src={Logout} alt="Logout Logo" id="Logout" />
        </a>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
