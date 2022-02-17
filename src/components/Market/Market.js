import React from "react";
<<<<<<< HEAD
import { Navbar, Button, Nav } from "react-bootstrap";
=======
import { Navbar, Container, Nav } from "react-bootstrap";
>>>>>>> 187acfbf3eb41eb8b6d056bbc1d1b53e2e14bcaf
import "./Market.css";

function Market() {
  return (
    <>
<<<<<<< HEAD
      <h1>Hello, This is Market</h1>
=======
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
>>>>>>> 187acfbf3eb41eb8b6d056bbc1d1b53e2e14bcaf
    </>
  );
}

export default Market;
