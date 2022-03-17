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
import mathSum from "math-sum";

import { SiteDataContext } from "../../SiteData";
import { useNavigate } from "react-router-dom";
import WalletReloadModal from "../Modal/WalletReloadModal";
import { PhotoSizeSelectLargeRounded } from "@mui/icons-material";

Chart.register(...registerables);

function Dashboard(props) {
  //light mode and dark mode
  const [theme, setTheme] = React.useState("dark");

  const [getLabel, setLabel] = React.useState(["Loss", "Profit"]);
  const [dataSets, setDataSets] = React.useState([0, 0]);
  const { user_data, is_data_ready, wallet_list } = useContext(SiteDataContext);
  const [doughnutType, setDoughnutType] = React.useState("");
  const [display, setDisplay] = React.useState("none");
  const WalletPopupHandler = () => {
    setDisplay("unset");
  };

  const handleChange = (event) => {
    setDoughnutType(event.target.value);
  };

  let curr_date = new Date();
  // const [databaseBuy, setDatabaseBuy] = React.useState([]);
  // const [databaseAvg, setDatabaseAvg] = React.useState([]);
  const [asset_database, setAssetDatabase] = React.useState([]);

  // const database = [
  //   {
  //     currency: "ETH",
  //     type: "buy",
  //     current_price: 2551.15,
  //     quantity: 3,
  //     wallet_id: "831f36a7-a3ae-4111-aefc-187ed4df9a0f",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "SHIB",
  //     type: "buy",
  //     current_price: 0.00002175,
  //     quantity: 27,
  //     wallet_id: "bbbfc69e-a7ab-47f8-97d4-46dd325fddfd",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "SHIB",
  //     type: "sell",
  //     current_price: 0.00002174,
  //     quantity: 7,
  //     wallet_id: "bbbfc69e-a7ab-47f8-97d4-46dd325fddfd",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "SHIB",
  //     type: "sell",
  //     current_price: 0.00002174,
  //     quantity: 7,
  //     wallet_id: "bbbfc69e-a7ab-47f8-97d4-46dd325fddfd",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "SHIB",
  //     type: "sell",
  //     current_price: 0.00002174,
  //     quantity: 7,
  //     wallet_id: "bbbfc69e-a7ab-47f8-97d4-46dd325fddfd",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "ADA",
  //     type: "buy",
  //     current_price: 0.794,
  //     quantity: 10,
  //     wallet_id: "69409145-c74d-4eb6-8328-796fb77ca75f",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "ADA",
  //     type: "buy",
  //     current_price: 0.941,
  //     quantity: 10,
  //     wallet_id: "61409145-c74d-4eb6-8328-796fb77ca75f",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     currency: "ETH",
  //     type: "buy",
  //     current_price: 2910.15,
  //     quantity: 3,
  //     wallet_id: "841f36a7-a3ae-4111-aefc-187ed4df9a0f",
  //     loginid: "HKR20220315000000000000000082",
  //   },
  // ];
  React.useEffect(() => {
    const base_url = "https://api.tradehikers.xyz";
    const { loginid, token } = user_data;
    const req = new Request(`${base_url}/transaction/${loginid}`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ token }),
    });
    fetch(req).then((res) => {
      res.json().then((data) => {
        console.log(data); //JSON FROM BE
        setAssetDatabase(data);
      });
    });
  }, []);

  // getHistory();
  // console.log("araaay", asset_database);

  // const assetDatabase = [
  //   {
  //     wallet_id: "1ed89afa-9916-40b5-a320-475b8eb26c95",
  //     currency: "BTC",
  //     balance: 3,
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     wallet_id: "831f36a7-a3ae-4111-aefc-187ed4df9a0f",
  //     currency: "ETH",
  //     balance: 3,
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     wallet_id: "666406c8-5454-483f-96b1-44021a630dad",
  //     currency: "USD",
  //     balance: 58.039304639994,
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     wallet_id: "bbbfc69e-a7ab-47f8-97d4-46dd325fddfd",
  //     currency: "SHIB",
  //     balance: 32,
  //     loginid: "HKR20220315000000000000000082",
  //   },
  //   {
  //     wallet_id: "69409145-c74d-4eb6-8328-796fb77ca75f",
  //     currency: "ADA",
  //     balance: 10,
  //     loginid: "HKR20220315000000000000000082",
  //   },
  // ];

  let profitArr = [];
  let lossArr = [];

  let buyArr = [];
  let sellArr = [];

  asset_database.forEach((element) => {
    if (element.transaction_type === "sell") {
      sellArr.push(element);
    } else {
      buyArr.push(element);
    }
  });

  // React.useEffect(() => {
  //   let tempArr = [];
  //   buyArr.forEach((element) => {
  //     let tempObj = {};
  //     tempObj["currency"] = element.currency;
  //     tempObj["type"] = element.type;
  //     let calc = element.current_price * element.quantity;
  //     tempObj["total_price"] = calc;
  //     tempObj["wallet_id"] = element.wallet_id;
  //     tempObj["loginid"] = element.loginid;
  //     tempArr.push(tempObj);
  //   });
  //   setDatabaseBuy(tempArr);
  // }, []);

  // React.useEffect(() => {
  //   console.log(databaseBuy);
  // }, [databaseBuy]);

  let buyTotalPrice = [];
  buyArr.reduce(function (res, value) {
    if (!res[value.currency]) {
      res[value.currency] = {
        currency: value.currency,
        total_price: 0,
        count: 0,
      };
      buyTotalPrice.push(res[value.currency]);
    }
    res[value.currency].total_price += value.current_price;
    res[value.currency].count += 1;

    return res;
  }, {});

  let databaseAvgPrice = [];
  buyTotalPrice.forEach((element) => {
    let tempObj = {};
    tempObj["currency"] = element.currency;
    let calc = element.total_price / element.count;
    tempObj["avg_price"] = calc;
    databaseAvgPrice.push(tempObj);
  });
  // setDatabaseAvg(tempArr);
  // console.log("temp arr ", tempArr);

  // React.useEffect(() => {
  // let tempArr = [];
  // buyTotalPrice.forEach((element) => {
  //   let tempObj = {};
  //   tempObj["currency"] = element.currency;
  //   let calc = element.total_price / element.count;
  //   tempObj["avg_price"] = calc;
  //   tempArr.push(tempObj);
  // });
  // setDatabaseAvg(tempArr);
  // }, []);

  // React.useEffect(() => {
  //   let combine = sellArrWithAvg().forEach((element) => {
  //     profitnLoss(element.current_price, element.average_price);
  //     return element;
  //   });

  //   console.log("hi ", combine);
  // }, [databaseAvg]);

  const sellArrWithAvg = () => {
    sellArr.map((item) => {
      databaseAvgPrice.map((subItem) => {
        if (item.currency === subItem.currency) {
          item.average_price = subItem.avg_price;
        }
      });
    });

    return sellArr;
  };

  const profitnLoss = (price, avg) => {
    let calculation1 = ((price - avg) / avg) * 100;

    // console.log(calculation1, price, avg);
    if (calculation1 > 0) {
      profitArr.push(calculation1);
    } else {
      lossArr.push(Math.abs(calculation1));
    }
  };

  sellArrWithAvg().forEach((element) => {
    profitnLoss(element.current_price, element.average_price);
  });

  const sumProfit = profitArr.reduce(
    (totalProfit, number) => totalProfit + number,
    0
  );
  const sumLoss = lossArr.reduce((totalLoss, number) => totalLoss + number, 0);
  const profitPercent = (sumProfit / (sumLoss + sumProfit)) * 100;
  const lossPercent = (sumLoss / (sumLoss + sumProfit)) * 100;

  const sumCoinValue = buyTotalPrice
    .filter((c) => c.currency !== "USD")
    .map((b) => b.total_price)
    .reduce((a, number) => a + number, 0);

  if (!is_data_ready) {
    return <h1>Loading..</h1>;
  }

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
            <Slider backendData={buyArr} />
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
              <p id="prof-bal">
                USD &nbsp; {sumCoinValue.toLocaleString("en-US") || "0"}
              </p>
            </div>
          </div>
          <div className="profile-avatar">
            <Avatar
              alt="user's pic"
              src={props.dashDP}
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
            <h1 id="wal-bal">
              USD
              {wallet_list
                .find((w) => w.currency === "USD")
                ?.balance.toLocaleString("en-US") || "0"}
            </h1>
          </div>
          <img
            className="w-icon"
            onClick={WalletPopupHandler}
            alt="reload wallet"
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
                      setDataSets([lossPercent, profitPercent]);
                      console.log("buy", buyArr);
                      console.log("sell", sellArr);
                      console.log("profit", profitArr);
                      console.log("loss", lossArr);
                      console.log(sumProfit);
                      console.log("sum loss", sumLoss);
                      // console.log("dataBuy", databaseBuy);
                      console.log("buyTotal", buyTotalPrice);
                      console.log("avg", databaseAvgPrice);
                      console.log("add avg ", sellArrWithAvg());
                      console.log("profitnloss", profitnLoss());
                      console.log("live data", asset_database);
                      console.log(
                        "coin value",
                        buyTotalPrice
                          .filter((c) => c.currency !== "USD")
                          .map((b) => b.total_price)
                      );
                      console.log("coin sum", sumCoinValue);
                      // handleClickTrial();
                      // console.log("hi, ", processedInput);
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
                      setLabel(
                        buyTotalPrice
                          .filter((c) => c.currency !== "USD")
                          .map((a) => a.currency)
                      );
                      setDataSets(
                        buyTotalPrice
                          .filter((c) => c.currency !== "USD")
                          .map((b) => b.total_price)
                      );
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
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      bodyColor: "black",
                      callbacks: {
                        label: function (context) {
                          var label = context.label,
                            currentValue = context.raw,
                            total =
                              context.chart._metasets[context.datasetIndex]
                                .total;

                          var percentage = parseFloat(
                            ((currentValue / total) * 100).toFixed(1)
                          );

                          return label + ":" + " (" + percentage + "%)";
                        },
                      },
                    },
                  },
                }}
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
              <p id="c-footer">
                Total Profit:{" "}
                {sumProfit ? Number.parseFloat(sumProfit).toFixed(2) : "0.00"}
                USD
              </p>
              <p>
                Total Loss:
                {sumLoss ? Number.parseFloat(sumLoss).toFixed(2) : "0.00"} USD
              </p>
            </div>
          </div>
        </div>
        <div className="Table-header">Transaction History </div>
        <div className="Table">
          <TransTable
            theme={theme}
            setTheme={setTheme}
            transData={asset_database}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
