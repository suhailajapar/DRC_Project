import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import "./BuySellTabs.css";
import { SiteDataContext } from "../../SiteData";
import { BASE_URL } from "../ApiBinance/HikersAPI";

const BuySellInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "#727272",
  },
  "& label.Mui-focused":
    theme === "dark"
      ? {
          color: "#E5E5E5",
        }
      : { color: "#000000" },
  "& .MuiInputAdornment-root":
    theme === "dark"
      ? {
          color: "white",
        }
      : {
          color: "black",
        },
  "& .MuiOutlinedInput-root":
    theme === "dark"
      ? {
          borderRadius: 10,
          color: "#E5E5E5",
          "& fieldset": {
            borderColor: "#BDBDBD",
          },
          "&:hover fieldset": {
            borderColor: "#BDBDBD",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#BDBDBD",
          },
        }
      : {
          borderRadius: 10,
          color: "#000000",
          "& fieldset": {
            borderColor: "#616161",
          },
          "&:hover fieldset": {
            borderColor: "#616161",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#7E7E7E",
          },
        },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props) {
  const { theme } = props;
  const [value, setValue] = React.useState(0);
  const { user_data, is_data_ready, fetchWalleList, pair, handleLogout } =
    useContext(SiteDataContext);
  const [quantity, setQuantity] = useState(0);
  const [error_message, setErrorMessage] = useState("");

  //REQ TO BE FOR RELOAD/TRANSFER PROCESS
  const buyCrypto = () => {
    const buy_info = {
      token: user_data.token,
      loginid: user_data.loginid,
      quantity: quantity,
      currency: pair.substr(0, pair.length - 4),
    };
    console.log(buy_info);
    const req = new Request(`${BASE_URL}/transaction/buy`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(buy_info),
    });
    fetch(req).then((res) => {
      res.json().then((data) => {
        // if (data.name) {
        //   setErrorMessage("token expired, please re-login");
        //   // handleLogout();
        // }
        if (data.error) {
          if (data.error.name) {
            setErrorMessage("token expired, please re-login");
          }
          setErrorMessage(data.error);
        } else {
          console.log(data);
          setErrorMessage(
            ` SUCCESS! buy:${pair.substr(
              0,
              pair.length - 4
            )} quantity:${quantity} price:${data.current_price} total:${
              quantity * data.current_price
            }`
          );
          fetchWalleList();
        }
      });
    });
  };

  //Check if user_data is ready
  if (!is_data_ready) {
    return <h1>Loading..</h1>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        "& .MuiBox-root": {
          padding: "24px 0px",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        sx={{ borderRadius: 4, "& .MuiTab-root": { opacity: 1 } }}
        TabIndicatorProps={{ style: { background: "transparent" } }}
      >
        <Tab
          sx={[
            {
              "&.Mui-selected": {
                backgroundColor: "green",
                fontWeight: 900,
                fontSize: 22,
              },

              fontSize: 18,
              color: "#C4C4C4",
              backgroundColor: "#171717",
            },
          ]}
          label="BUY"
          {...a11yProps(0)}
        />
        <Tab
          sx={[
            {
              "&.Mui-selected": {
                backgroundColor: "red",
                fontWeight: 900,
                fontSize: 22,
              },
              fontSize: 18,
              color: "#C4C4C4",
              backgroundColor: "#171717",
            },
          ]}
          label="SELL"
          {...a11yProps(1)}
        />
      </Tabs>

      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      <TabPanel value={value} index={0}>
        <div>{error_message}</div>
        <div className="buy-input-container">
          <BuySellInput
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>{pair.substr(0, pair.length - 4)}</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <BuySellInput
            label="Price"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>USD</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <BuySellInput
            label="Total"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>USD</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <Button
            variant="contained"
            // color="success"
            sx={{
              bgcolor: "#498e2c",
              height: "54px",
              borderRadius: "10px",
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              "&:hover": {
                backgroundColor: "#237500",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "#498e2c",
                boxShadow: "none",
              },
            }}
            fullWidth
            onClick={buyCrypto}
          >
            BUY
          </Button>
          {/* <input type="submit" className="buy-button" value="BUY" /> */}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="buy-input-container">
          <BuySellInput
            label="Amount"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>SQB</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <BuySellInput
            label="Price"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>USD</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <BuySellInput
            label="Total"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography>USD</Typography>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <div className="buy-spacing"></div>
          <Button
            variant="contained"
            // color="success"
            sx={{
              bgcolor: "red",
              height: "54px",
              borderRadius: "10px",
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              "&:hover": {
                backgroundColor: "#921010",
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: "red",
                boxShadow: "none",
              },
            }}
            fullWidth
            onClick={() => {
              alert("sell is clicked");
            }}
          >
            SELL
          </Button>
          {/* <input type="submit" className="sell-button" value="SELL" /> */}
        </div>
      </TabPanel>
      {/* </SwipeableViews> */}
    </Box>
  );
}
