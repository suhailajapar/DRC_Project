import React from "react";
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

export default function FullWidthTabs({ theme, setTheme }) {
  // const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
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
            theme={theme}
            setTheme={setTheme}
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
            theme={theme}
            setTheme={setTheme}
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
            theme={theme}
            setTheme={setTheme}
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
            onClick={() => {
              alert("clicked");
            }}
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
            theme={theme}
            setTheme={setTheme}
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
            theme={theme}
            setTheme={setTheme}
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
            theme={theme}
            setTheme={setTheme}
          />{" "}
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
              alert("clicked");
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
