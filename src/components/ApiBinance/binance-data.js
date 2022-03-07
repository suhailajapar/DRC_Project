import React from "react";

const useBinanceData = (symbol) => {
  const [ask, setAsk] = React.useState(0);
  const [bid, setBid] = React.useState(0);
  const [open, setOpen] = React.useState(0);
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);
  const [close, setClose] = React.useState();
  const [volume, setVolume] = React.useState(0);
  const [percent, setPercent] = React.useState("");
  const [time, setTime] = React.useState();
  const socket = React.useRef(null);

  React.useEffect(() => {
    socket.current = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${symbol.toLowerCase()}@ticker`
    );
    socket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      const { a, b, o, l, h, c, v, P, E } = data.data;
      setAsk(a);
      setBid(b);
      setOpen(o);
      setLow(l);
      setHigh(h);
      setClose(c);
      setVolume(v);
      setPercent(P);
      setTime(E);
    };

    return () => socket.current.close();
  }, [symbol]);

  return [ask, bid, open, low, high, close, volume, percent, time];
};

export default useBinanceData;
