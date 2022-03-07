import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import classes from "./ToLoginModal.module.css";

const WalletReloadModal = (props) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: `${props.display}` }}>
      <div className={classes.backdrop} />
      <div className={classes.popup}>
        <Card className={classes.modal}>
          <div className={classes.title}>{props.onSuccessMsg}</div>
          <DoneAllRoundedIcon sx={{ color: `#609D45`, fontSize: 55 }} />
          <div className={classes.welcome_message}>
            <p className={classes.msg_title}>Welcome aboard, Hikers!</p>
            <p className={classes.msg_desc}>
              Thank you for signing up with us.
            </p>
          </div>
          <div className={classes.buttons}>
            <span className={classes.home_btn} onClick={() => navigate("/")}>
              Back
            </span>
            <button
              className={classes.to_login_btn}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WalletReloadModal;
