import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Linechart.css";
import useBncLineChart from "../ApiBinance/bnc-linegraph";
import annotationPlugin from "chartjs-plugin-annotation";
import zoomPlugin from "chartjs-plugin-zoom";
Chart.register(...registerables, annotationPlugin, zoomPlugin);

function App() {
  const [pair, setPair] = useState("BTCUSDT");
  const [loading, setLoading] = useState(false);
  const [interval, setInterval] = useState("1m");
  const [close, time] = useBncLineChart(pair);

  const [price_data, setPriceData] = useState([]);
  const [time_label, setTimeLabel] = useState([]);
  console.log("time", time, "close", close);

  useEffect(() => {
    if (close) {
      setPriceData((prev) => [...prev, close]);
    }
  }, [close]);

  useEffect(() => {
    if (time) {
      const date = new Date(time);
      const t = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const newdate = `${t} ${month}/${day}`;
      setTimeLabel((prev) => [...prev, newdate]);
    }
  }, [time]);
  const options = {
    scales: {
      xAxis: {
        // min: time_label[time_label.length - 11],
      },
      // yAxis: {
      //   grace: "80%",
      // },
    },
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: "line",
            yMin: close,
            yMax: close,
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            label: {
              content: close,
              enabled: true,
              position: "right",
            },
          },
        },
      },
      responsive: true,
      scales: {
        y: {
          min: () => {
            Math.min(price_data);
          },
          max: () => {
            Math.max(price_data);
          },
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
        animation: {
          duration: 0,
        },
      },
    },
  };

  return (
    //Market chart
    <div className="app">
      {/* Line Chart */}
      <div className="db-chart">
        <Line
          key={pair + interval + pair}
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
