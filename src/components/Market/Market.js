import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./Market.css";
import Marketlist from "./Marketlist";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "Febuary", "March"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function Market() {
  return (
    <>
      <body>
        <div className="chartNmarket">
          <div className="infodisplay">
            <div className="productname">
              <div className="dropdown"></div>
              <div className="displayname"></div>
            </div>
            <div className="timeselect"></div>
            <div className="dateTime"></div>
          </div>

          <div className="chartNpurchase">
            <div className="chart">
              <div>
                <Line
                  className="graph"
                  options={options}
                  data={data}
                  width={25}
                  height={8.5}
                ></Line>
              </div>

              <div className="top-section">
                <div>
                  <h2>Cryptocurrency</h2>
                  <Marketlist></Marketlist>
                </div>
              </div>

              <div>
                <h1 className="graph-section">Graph</h1>
              </div>
            </div>

            <div className="buy-sell">
              <input className="amount" placeholder="Amount"></input>
              <input className="price" placeholder="Price"></input>
              <input className="total" placeholder="Total"></input>
              <button className="buy" type="submit">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div className="listNgainers">
          <div className="list"></div>
          <div className="gainers">gainers</div>
        </div>
      </body>
    </>
  );
}

export default Market;
