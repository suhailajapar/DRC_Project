import React from "react";
import SideBar from "../Menubar/SideBar";
import "./Dashboard.css";
import DashHead from "../../assets/DashboardAsset/Dashboard-header.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import ProfilePic from "../../assets/DashboardAsset/profile-placeholder.png";
import WalletIcon from "../../assets/DashboardAsset/wallet-1.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Slider from "./Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconSelect: {
    color: "white",
  },
});

Chart.register(...registerables);

function Test() {
  const [doughnutType, setDoughnutType] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setDoughnutType(event.target.value);
  };
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
            <NotificationsIcon fontSize="large" className="IconPads" />
            <MailIcon fontSize="large" />
          </div>
        </div>
        <div className="BoughtAssets" style={{ height: 175 }}>
          <div className="b-title">
            <span>Bought Assets</span>
          </div>
          <div className="wrap">
            <Slider />
            {/* <Carousel /> */}
          </div>
        </div>
        <div className="Profile">
          <div className="p-col profile-details-box">
            <div className="profile-details">
              <h3 id="prof-head">User Profile</h3>
              <p>@username</p>
              <p>Full Name</p>
              <p>Date joined: 01-01-2022</p>
              <p>Asset's Balance as on (Today's Date)</p>
              <h2 id="prof-bal">USD 999999.99</h2>
            </div>
          </div>
          <div className="p-col profile-avatar">
            <Avatar
              alt="user's pic"
              src={ProfilePic}
              sx={{ width: 65, height: 65 }}
            />
          </div>
        </div>
        <div className="LiveCharts box">4</div>
        <div className="Wallet">
          <div className="w-col w-value">
            <p>Wallet's Balance</p>
            <h1 id="wal-bal">USD 999999.99</h1>
          </div>

          <div className="w-col w-icon">
            <Avatar
              alt="reload wallet"
              src={WalletIcon}
              sx={{ width: 50, height: 50 }}
            />
          </div>
        </div>
        <div className="Chart">
          <div className="c-top">
            <div className="c-top-title c-col">
              <p id="c-title">Total Profit/Loss</p>
              <p id="c-subtitle">as on 01-01-2022</p>
            </div>
            <div className="c-top-dropdown c-col">
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  backgroundColor: "#193460",
                  height: 30,
                  borderRadius: 2,
                }}
              >
                <Select
                  classes={{ icon: classes.iconSelect }}
                  sx={{
                    height: 30,
                    color: "white",
                    fontSize: 12,
                    borderRadius: 2,
                  }}
                  value={doughnutType}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                >
                  <MenuItem
                    sx={{
                      height: 30,
                      fontSize: 12,
                    }}
                    value=""
                  >
                    Total Profit/Loss
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 12 }} value={10}>
                    Something else
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 12 }} value={20}>
                    Another thing
                  </MenuItem>
                  <MenuItem sx={{ fontSize: 12 }} value={30}>
                    Whatever
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="c-mid">
            <div id="donut">
              <Doughnut
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      bodyColor: "black",
                    },
                  },
                }}
                data={{
                  labels: ["Loss", "Profit"],
                  datasets: [
                    {
                      data: [35, 65],
                      backgroundColor: ["#C14462", "#439090"],
                      borderColor: ["#FF003D", "#00FFFF"],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="c-bot">
            <p id="c-footer">Total Profit:</p>
            <p>Total Loss:</p>
          </div>
        </div>
        <div className="Table box">7</div>
      </div>
    </div>
  );
}

export default Test;
