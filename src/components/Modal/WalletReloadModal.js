import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import classes from "./WalletReloadModal.module.css";

const WalletReloadModal = (props) => {
  const [topup_amount, setTopupAmount] = useState(0);
  const [selected_currency, setSelectedCurrency] = useState("usd");

  const walletReloadHandler = () => {
    setTopupAmount("");
    alert("topup BANZAI!");
  };

  return (
    <div style={{ display: `${props.display}` }}>
      <div
        className={classes.backdrop}
        onClick={() => props.setDisplay("none")}
      />
      <div className={classes.popup}>
        <Card className={classes.modal}>
          <h3 className={classes.title}>Wallet Reload &#38; Asset Transfer</h3>
          <div className={classes.info}>
            <div className={classes.info_line}>
              Wallet ID:
              <span className={classes.wallet_info}>1234-5678-9101-0001</span>
            </div>
            <div className={classes.info_line}>
              <label for="wallet_currency">Wallet Currency:</label>
              <select
                name="wallet_currency"
                id="wallet_currency"
                className={classes.wallet_currency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                <option value="usd">USD</option>
                <option value="btc">BTC</option>
              </select>
            </div>
            <div className={classes.info_line}>
              {selected_currency === "usd" ? "Reload " : "Transfer "}amount:
              <span className={classes.wallet_limit}>
                (Max topup limit 10,000)
              </span>
            </div>
            <input
              className={classes.input_area}
              type="number"
              placeholder="Amount..."
              onChange={(e) => setTopupAmount(e.target.value)}
            />
            <div className={`${classes.err_msg} ${classes.info_line}`}>
              Error Message HERE!
            </div>
          </div>
          <div className={classes.buttons}>
            <span
              className={classes.cancel_btn}
              onClick={() => props.setDisplay("none")}
            >
              Cancel
            </span>
            <button
              className={classes.reload_btn}
              /* disabled={validateForm()} */
              onClick={walletReloadHandler}
            >
              {selected_currency === "usd" ? "Reload" : "Transfer"}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WalletReloadModal;
