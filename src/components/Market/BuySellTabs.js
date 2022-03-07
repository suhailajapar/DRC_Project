import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./BuySellTabs.css";

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
          <Typography>{children}</Typography>
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

export default function FullWidthTabs() {
  const theme = useTheme();
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

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="buy-input-container">
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Amount"
            />
            <div className="buy-spacing"></div>
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Price"
            />
            <div className="buy-spacing"></div>
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Total"
            />
            <div className="buy-spacing"></div>
            <input type="submit" className="buy-button" value="BUY" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="buy-input-container">
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Amount"
            />
            <div className="buy-spacing"></div>
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Price"
            />
            <div className="buy-spacing"></div>
            <input
              className="buy-sell-input"
              type="number"
              placeholder="Total"
            />
            <div className="buy-spacing"></div>
            <input type="submit" className="sell-button" value="SELL" />
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
