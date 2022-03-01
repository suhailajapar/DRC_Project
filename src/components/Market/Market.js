import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Market.css";
import Marketlist from "./Marketlist";

function Market() {
  const [popout, setPopout] = useState(false);
  return (
    <body className="market-layout">
      <div className="header-section box">1</div>
      <div className="title-section">
        <div>
          <div className="btn-container">
            <Button
              className="btn-popout"
              onClick={() => {
                setPopout(true);
              }}
            >
              Click Me
            </Button>
            {popout && <Marketlist closePopout={setPopout} />}
          </div>
        </div>
      </div>
      <div className="graph-section box"></div>
      <div className="buysell-section box">4</div>
      <div className="gain-section box">5</div>
      <div className="loss-section box">6</div>
    </body>
  );
}

export default Market;
