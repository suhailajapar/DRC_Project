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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Dashbar from "../Menubar/DashBar";
import TransTable from "./TransacHist";
import Footer from "./../Footer/Footer";

import { SiteDataContext } from "../../SiteData";
import { useNavigate } from "react-router-dom";

Chart.register(...registerables);

//Pop-up modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 800,
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "block",
};

//For deposit and withdrawal
//Credit and Debit Card
function CreditnDebitCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleOpen}>
        <ListItemText primary="Credit and Debit card"></ListItemText>
      </ListItemButton>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className="Amountbox"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 300,
            width: 400,
            bgcolor: "black",
            color: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={2}>
            Card No.:
            <input type="number" name="Card No." />
            Expiration Date:
            <input type="number" name="Expiration Date" />
            Card Security Code:
            <input type="number" name="Card Security Code" />
            Amount: $
            <input type="number" name="Amount" />
            <input type="submit" value="Submit" />
          </Stack>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

//Bank
function Bank() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [bank, setBank] = React.useState("");

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleOpen}>
        <ListItemText primary="Bank"></ListItemText>
      </ListItemButton>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className="Amountbox"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 300,
            width: 400,
            bgcolor: "black",
            color: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={2}>
            Bank:
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Bank"
              onChange={handleChange}
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value={10}>Maybank</MenuItem>
              <MenuItem value={20}>CIMB</MenuItem>
              <MenuItem value={30}>Hong Leong</MenuItem>
            </Select>
            Amount: $
            <input type="number" name="Amount" />
            <input type="submit" value="Submit" />
          </Stack>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

//Paypal
function Paypal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleOpen}>
        <ListItemText primary="Paypal"></ListItemText>
      </ListItemButton>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className="Amountbox"
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: 300,
            width: 400,
            bgcolor: "black",
            color: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={2}>
            Paypal Account No.:
            <input type="number" name="Card No." />
            Amount: $
            <input type="number" name="Amount" />
            <input type="submit" value="Submit" />
          </Stack>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Dashboard() {
  //light mode and dark mode
  const [theme, setTheme] = React.useState("dark");
  const [getLabel, setLabel] = React.useState(["Loss", "Profit"]);
  const [dataSets, setDataSets] = React.useState([35, 65]);

  //Open close function for the wallet button
  const [open, setOpen] = React.useState(false);
  const { user_data } = useContext(SiteDataContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [doughnutType, setDoughnutType] = React.useState("");

  const handleChange = (event) => {
    setDoughnutType(event.target.value);
  };

  let curr_date = new Date();

  return (
    <div className="DashBG">
      {/* <Menubar theme={theme} setTheme={setTheme} /> */}
      <div className="Layout">
        <div className="dash-top">
          <Dashbar theme={theme} setTheme={setTheme} />
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
              <p>Asset's Balance as on {curr_date.toDateString()}</p>
              <h2 id="prof-bal">USD 999999.99</h2>
            </div>
          </div>
          <div className="profile-avatar">
            <Avatar
              alt="user's pic"
              src={ProfilePic}
              sx={[
                {
                  "@media (max-width: 1024px)": {
                    width: 60,
                    height: 60,
                  },
                  width: 65,
                  height: 65,
                },
              ]}
            />
          </div>
        </div>
        <div className="LiveCharts-header">
          Current Trends (since buy price)
        </div>
        <div className="LiveCharts">4</div>
        <div className="Wallet">
          <div className="w-value">
            <p>Wallet's Balance</p>
            <h1 id="wal-bal">USD 999999.99</h1>
          </div>

          <Button onClick={handleOpen} className="w-icon">
            <Avatar
              alt="reload wallet"
              src={theme === "dark" ? WalletIconDark : WalletIconLight}
              sx={{
                width: 50,
                height: 50,
                "@media (min-width: 769px) and (max-width: 1024px)": {
                  width: 40,
                  height: 40,
                },
                "@media (min-width: 200px) and (max-width: 768px)": {
                  width: 55,
                  height: 55,
                },
              }}
            />
          </Button>
          {/* Modal starts here */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="Walletbox">
              <Box
                sx={{ overflow: "auto", height: 350, margin: 6 }}
                className="Deposit"
              >
                <p>Deposit</p>
                <List>
                  <ListItem disablePadding>
                    <CreditnDebitCard />
                  </ListItem>
                  <ListItem disablePadding>
                    <Bank />
                  </ListItem>
                  <ListItem disablePadding>
                    <Paypal />
                  </ListItem>
                </List>
              </Box>

              <Box
                sx={{ overflow: "auto", height: 350, margin: 6 }}
                className="Withdrawal"
              >
                <p>Withdrawal</p>
                <List>
                  <ListItem disablePadding>
                    <CreditnDebitCard />
                  </ListItem>
                  <ListItem disablePadding>
                    <Bank />
                  </ListItem>
                  <ListItem disablePadding>
                    <Paypal />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Modal>
          {/* Modal ends here */}
        </div>
        <div className="Chart">
          <div className="c-top">
            <div className="c-top-title c-col">
              <p id="c-title">Total Profit/Loss</p>
              <p id="c-subtitle">as on 01-01-2022</p>
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
