import React, { useContext } from "react";
import "./Dashboard.css";
import { Avatar } from "@mui/material";
import ProfilePic from "../../assets/DashboardAsset/profile-placeholder.png";
import WalletIconDark from "../../assets/DashboardAsset/WalletIconDark.svg";
import WalletIconLight from "../../assets/DashboardAsset/WalletIconLight.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Slider from "./DSlider";
import Dashbar from "../Menubar/HeaderBar";
import Linechart from "./Linechart";
import SideBar from "../Menubar/FinalTestBar";
import Menubar from "./../Menubar/Menubar";
import Footer from "./../Footer/Footer";
import TransTable from "./TransacHist";

import { SiteDataContext } from "../../SiteData";
import { useNavigate } from "react-router-dom";
import WalletReloadModal from "../Modal/WalletReloadModal";

Chart.register(...registerables);

function Dashboard() {
  //light mode and dark mode
  const [theme, setTheme] = React.useState("dark");
  const [getLabel, setLabel] = React.useState(["Loss", "Profit"]);
  const [dataSets, setDataSets] = React.useState([35, 65]);
  const { user_data } = useContext(SiteDataContext);
  const [doughnutType, setDoughnutType] = React.useState("");
  const [display, setDisplay] = React.useState("none");
  const WalletPopupHandler = () => {
    setDisplay("unset");
  };

  const handleChange = (event) => {
    setDoughnutType(event.target.value);
  };

  let curr_date = new Date();

  return (
    <div className="DashBG">
      {/* <Menubar theme={theme} setTheme={setTheme} /> */}
      <WalletReloadModal display={display} setDisplay={setDisplay} />
      <div className="Layout">
        <div className="dash-top">
          <Dashbar titleName={"Dashboard"} theme={theme} setTheme={setTheme} />
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
          <div className="profile-details-box">
            <div className="profile-details">
              <h3 id="prof-head">User Profile</h3>
              <p>@{user_data.username}</p>
              <p>{user_data.full_name}</p>
              <p>Date joined: {user_data.date_joined}</p>
              <p className="p3">
                Asset's Balance as on {curr_date.toDateString()}
              </p>
              <p id="prof-bal">USD 999999.99</p>
            </div>
          </div>
          <div className="profile-avatar">
            <Avatar
              alt="user's pic"
              src={ProfilePic}
              sx={[
                {
                  "@media (max-width: 1720px)": {
                    width: 55,
                    height: 55,
                  },
                  "@media (max-width: 1070px)": {
                    width: 50,
                    height: 50,
                  },
                  "@media (max-width: 1024px)": {
                    width: 50,
                    height: 50,
                  },
                  width: 65,
                  height: 65,
                },
              ]}
            />
          </div>
        </div>
        <div className="LiveCharts-header">Current Trend (Since buy Price)</div>
        <div className="LiveCharts">
          <Linechart />
        </div>
        <div className="Wallet">
          <div className="w-value">
            <p>Wallet's Balance</p>
            <h1 id="wal-bal">USD 999999.99</h1>
          </div>
          <img
            className="w-icon"
            onClick={WalletPopupHandler}
            alt="reload wallet"
            src={theme === "dark" ? WalletIconDark : WalletIconLight}
          />
        </div>
        <div className="Chart">
          <div className="c-top">
            <div className="c-top-title c-col">
              <p id="c-title">Total Profit/Loss</p>
              <p id="c-subtitle">as on {curr_date.toDateString()}</p>
            </div>
            <div className="c-top-dropdown c-col">
              <FormControl
                sx={
                  theme === "dark"
                    ? {
                        m: 1,
                        backgroundColor: "#193460",
                        height: 30,
                        borderRadius: 2,
                        "@media (min-width: 1024px) and (max-width: 1175px)": {
                          width: 110,
                        },
                        "@media (min-width: 769px) and (max-width: 1024px)": {
                          width: 110,
                        },
                        "@media (min-width: 10px) and (max-width: 375px)": {
                          width: 100,
                        },
                      }
                    : {
                        m: 1,
                        backgroundColor: "#609D45",
                        height: 30,
                        borderRadius: 2,
                        "@media (min-width: 1024px) and (max-width: 1175px)": {
                          width: 110,
                        },
                        "@media (min-width: 769px) and (max-width: 1024px)": {
                          width: 110,
                        },
                        "@media (min-width: 10px) and (max-width: 375px)": {
                          width: 100,
                        },
                      }
                }
              >
                <Select
                  sx={{
                    height: 30,
                    color: "white",
                    fontSize: 12,
                    borderRadius: 2,
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                  value={doughnutType}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      setLabel(["Loss", "Profit"]);
                      setDataSets([35, 65]);
                    }}
                    sx={{
                      height: 30,
                      fontSize: 12,
                    }}
                    value=""
                  >
                    Total Profit/Loss
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      // api = something
                      // push from api to arr=[]
                      // setLabel = arr

                      // api = something
                      // push from api.data to some_arr=[]
                      // setData = arr
                      setLabel(["BTC", "ETH", "SHIBA"]);
                      setDataSets([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
                    }}
                    sx={{ fontSize: 12 }}
                    value={10}
                  >
                    Total Assets
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="c-mid">
            <div id="donut">
              <Doughnut
                options={
                  theme === "dark"
                    ? {
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            bodyColor: "black",
                          },
                        },
                      }
                    : {
                        plugins: {
                          legend: {
                            display: false,
                          },
                          tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            bodyColor: "white",
                          },
                        },
                      }
                }
                data={{
                  labels: getLabel,
                  datasets: [
                    {
                      data: dataSets,
                      backgroundColor: [
                        "#C14462",
                        "#439090",
                        "#00BFFF",
                        "#F0E68C",
                        "#DDA0DD",
                        "#FFFFFF",
                        "#9ACD32",
                        "#E9967A",
                        "#808000",
                        "#7F0000",
                      ],
                      borderColor: [
                        "#FF003D",
                        "#00FFFF",
                        "#98C4EC",
                        "#FFD700",
                        "#FF00FF",
                        "#DCDCDC",
                        "#00FF00",
                        "#FA8072",
                        "#B5B35D",
                        "#800000",
                      ],
                    },
                  ],
                }}
              />
            </div>
            <div className="c-bot">
              <p id="c-footer">Total Profit:</p>
              <p>Total Loss:</p>
            </div>
          </div>
        </div>
        <div className="Table-header">Transaction History </div>
        <div className="Table">
          <TransTable theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
