import React from "react";
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
import Slider from "./DSlider";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  iconSelect: {
    color: "white",
  },
});

Chart.register(...registerables);

//Pop-up modal sty;e
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 800,
  width: 1200,
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
      <Button onClick={handleOpen}>Credit and Debit card</Button>
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
            width: 800,
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

          <Button onClick={handleClose}>Close Child Modal</Button>
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

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Bank</Button>
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
            width: 800,
            bgcolor: "black",
            color: "white",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={2}>
            Bank:
            <input type="text" name="Bank" />
            Amount: $
            <input type="number" name="Amount" />
            <input type="submit" value="Submit" />
          </Stack>

          <Button onClick={handleClose}>Close Child Modal</Button>
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
      <Button onClick={handleOpen}>Paypal</Button>
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
            width: 800,
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

          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Dashboard() {
  //Open close function for the wallet button
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [doughnutType, setDoughnutType] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setDoughnutType(event.target.value);
  };

  return (
    <div className="DashBG">
      <div className="Layout">
        <div className="Top">
          <div className="DashLogo">
            <img src={DashHead} alt="Dashboard Logo" />
            <span className="DashHead">Dashboard</span>
          </div>
          <div className="dash-icon-head">
            <span className="dash-icon-text">Dark</span>
            <ToggleOnIcon fontSize="large" />
            <NotificationsIcon fontSize="large" className="dash-icon-pads" />
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

          <Button onClick={handleOpen} className="w-col w-icon">
            <Avatar
              alt="reload wallet"
              src={WalletIcon}
              sx={{ width: 50, height: 50 }}
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
                    <ListItemButton>
                      <ListItemText primary="Deposit through Credit & Debit card" />
                      <CreditnDebitCard />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Deposit through Local Bank" />
                      <Bank />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Deposit through Paypal" />
                      <Paypal />
                    </ListItemButton>
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
                    <ListItemButton>
                      <ListItemText primary="Withdraw through Credit & Debit card" />
                      <CreditnDebitCard />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Withdraw through Local Bank" />
                      <Bank />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Withdraw through Paypal" />
                      <Paypal />
                    </ListItemButton>
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

export default Dashboard;
