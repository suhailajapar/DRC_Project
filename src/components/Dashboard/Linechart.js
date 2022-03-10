import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Linechart.css";
import UseBinanceData from "./../ApiBinance/binance-data";
import annotationPlugin from "chartjs-plugin-annotation";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(...registerables, annotationPlugin, zoomPlugin);

function App() {
  const [pair, setPair] = useState("BTCUSDT");
  const [ask, bid, open, low, high, close, volume, time, percent, lineChart] =
    UseBinanceData(pair);

  let time_label = lineChart.map((lineChart) =>
    new Date(lineChart.time * 1000).toLocaleTimeString()
  );
  let price_data = lineChart.map((lineChart) => parseFloat(lineChart.close));

  // useEffect(() => {
  //   if (close) {
  //     setPriceData((prev) => [...prev, close]);
  //   }
  //   console.log(price_data);
  // }, [close]);

  // useEffect(() => {
  //   if (time) {
  //     const date = new Date(time);
  //     const t = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  //     const day = date.getDate();
  //     const month = date.getMonth() + 1;
  //     const newdate = `${t} ${month}/${day}`;
  //     setTimeLabel((prev) => [...prev, newdate]);
  //     console.log(time_label);
  //   }
  // }, [time]);
  const options = {
    scales: {
      xAxis: {
        min: time_label[time_label.length - 12],
      },
      y: {
        grace: "80%",
      },
    },
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yScaleId: "yAxis",
            yMin: price_data[price_data.length - 1],
            yMax: price_data[price_data.length - 1],
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            label: {
              content: price_data[price_data.length - 1],
              enabled: true,
              position: "right",
            },
          },
        },
      },
      responsive: true,
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
        animation: {
          duration: 0,
        },
      },
      // pan: {
      //   enabled: true,
      //   mode: "x",
      // },
    },
  };

  return (
    //Market chart
    <div className="app">
      {/* Line Chart */}
      <div className="line-chart-container">
        <Line
          className="line-dash"
          // key={pair + interval + pair}
          data={{
            labels: time_label,
            datasets: [
              {
                label: "Current Value",
                data: price_data,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.1)",
                borderColor: "rgba(75,192,192,1)",
                pointRadius: 0.5,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
