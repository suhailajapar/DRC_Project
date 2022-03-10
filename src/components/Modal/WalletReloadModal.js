import React, { useState, useEffect, useContext } from "react";
import Card from "../Card/Card";
import classes from "./WalletReloadModal.module.css";
import { SiteDataContext } from "../../SiteData";

const WalletReloadModal = (props) => {
  const [wallet_list, setWalletList] = useState([]);
  const [selected_wallet, setSelectedWallet] = useState(null);
  const [topup_amount, setTopupAmount] = useState(0);
  const { user_data, is_data_ready } = useContext(SiteDataContext);

  //GET USER WALLET LIST FROM BE
  useEffect(() => {
    const loginid = user_data.loginid;
    fetch(`http://localhost:3001/wallet/${loginid}`).then((res) => {
      res.json().then((data) => {
        setWalletList(data);
      });
    });
  }, []);

  //SET USER SELECTED WALLET
  useEffect(() => {
    if (wallet_list?.length > 0) {
      setSelectedWallet(wallet_list.find((w) => w.currency === "USD"));
    }
  }, [wallet_list]);

  //REQ TO BE FOR RELOAD/TRANSFER PROCESS
  const reloadWallet = () => {
    const reload_info = {
      amount: topup_amount,
      currency: selected_wallet?.currency,
    };
    const req = new Request(
      `http://localhost:3001/wallet/topup/${selected_wallet.wallet_id}`,
      {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(reload_info),
      }
    );
    fetch(req).then((res) => {
      res.json().then((data) => {
        return console.log(data);
      });
    });
  };

  const walletReloadHandler = () => {
    reloadWallet();
    // setTopupAmount("");
    alert("topup BANZAI!");
  };

  //Check if user_data is ready
  if (!is_data_ready || !wallet_list || wallet_list.length < 1) {
    return <h1>Loading..</h1>;
  }

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
              <span className={classes.wallet_info}>
                {selected_wallet?.wallet_id}
              </span>
            </div>
            <div className={classes.info_line}>
              <label name="wallet_currency">Wallet Currency:</label>
              <select
                name="wallet_currency"
                id="wallet_currency"
                className={classes.wallet_currency}
                value={selected_wallet?.currency}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectedWallet(
                    wallet_list.find((w) => w.currency === e.target.value)
                  );
                }}
              >
                {wallet_list?.map((w) => {
                  return (
                    <option key={w.wallet_id} value={w.currency}>
                      {w.currency}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes.info_line}>
              {selected_wallet?.currency === "USD" ? "Reload " : "Transfer "}
              amount:
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
              onClick={walletReloadHandler}
            >
              {selected_wallet?.currency === "USD" ? "Reload" : "Transfer"}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WalletReloadModal;
