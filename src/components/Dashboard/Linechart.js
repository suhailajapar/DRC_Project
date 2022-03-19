import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Linechart.css";
import useGeckoData from "./../ApiBinance/Gecko-data";
import UseBinanceData from "./../ApiBinance/binance-data";
import annotationPlugin from "chartjs-plugin-annotation";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(...registerables, annotationPlugin, zoomPlugin);

function App() {
  const [pair, setPair] = useState("bitcoin");
  const [time, price] = useGeckoData(pair);

  let time_label = time;
  let price_data = price;

  const options = {
    scales: {
      x: {
        //LIMIT TO 10 DATA AT A TIME
        min: time_label[time_label.length - 10],
      },
      y: {
        min: () => {
          Math.min(price_data);
        },
        max: () => {
          Math.max(price_data);
        },
      },
    },
    plugins: {
      autocolors: false,
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yScaleId: "yAxis",
            //WHERE BOUGHT PRICE IS SPECIFIED
            yMin: 38140.12,
            yMax: 38140.12,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            label: {
              //Displaying bought price
              content: 38140.12,
              enabled: true,
              position: "right",
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      zoom: {
        pan: {
          enabled: true,
          drag: true,
          mode: "x",
          speed: 10,
          threshold: 10,
          rangeMin: {
            x: -365,
          },
        },
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
    },
  };

  return (
    <div className="app">
      <div className="line-chart-container">
        <Line
          className="line-dash"
          data={{
            labels: time_label,
            datasets: [
              {
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
