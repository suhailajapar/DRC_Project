import React from "react";

const useBncLineChart = (symbol) => {
  const [close, setClose] = React.useState();
  const [time, setTime] = React.useState();
  const socket = React.useRef(null);

  React.useEffect(() => {
    socket.current = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker`
    );
    socket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      const { c, E } = data.data;
      setClose(c);
      setTime(E);
    };

    return () => socket.current.close();
  }, [symbol]);

  return [close, time];
};

export default useBncLineChart;
