import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Market.css";

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
            <div className="chart">chart</div>
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
          <div className="list">list</div>
          <div className="gainers">gainers</div>
        </div>
      </body>
    </>
  );
}

export default Market;
