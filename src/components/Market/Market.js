import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./Market.css";
import Marketlist from "./Marketlist";

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
              <div className="top-section">
                <div>
                  <h2>Cryptocurrency</h2>
                  <Marketlist />
                </div>
                <div></div>
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
