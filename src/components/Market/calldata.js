const WebSocket = require("ws");
var ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

ws.onopen = function (evt) {
  ws.send(JSON.stringify({ ticks: "cryBTCUSD", subscribe: 1 }));
};

ws.onmessage = function (msg) {
  data = JSON.parse(msg.data);
  //console.log("Ticks update: %o", data);
  // var dt = new Date(0);
  // var labels = dt.setUTCSeconds(data.tick.epoch * 1000);
  var myDate = new Date(data.tick.epoch * 1000);
  console.log(myDate.toLocaleString());
  console.log(data.tick.quote);
};

var data;
