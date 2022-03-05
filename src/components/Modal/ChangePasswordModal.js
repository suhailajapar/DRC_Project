import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./ChangePasswordModal.module.css";

const ChangePasswordModal = (props) => {
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [retype_password, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const [isNotMatch, setIsNotMatch] = useState("");

  const validateForm = () => {
    if (
      password.length > 0 &&
      new_password.length > 0 &&
      new_password === retype_password
    ) {
      return false;
    } else {
      return true;
    }
  };

  const errorHandler = (e) => {
    const pwd = e;
    const re = new RegExp(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*-_?!).{8,16}`);
    const pwd_test = re.test(pwd);
    if (pwd.length < 1) {
      return setError("This field is required");
    }
    if (new_password !== retype_password) {
      setIsNotMatch("Password does not match.");
      setError(
        "Password length must at least 8-16 characters and only accept alphanumeric and -_?!"
      );
      return;
    }
    if (pwd_test === false) {
      return setError(
        "Password length must at least 8-16 characters and only accept alphanumeric and -_?!"
      );
    }
  };

  const passwordChangeHandler = () => {
    setPassword("");
    setNewPassword("");
    setRetypePassword("");
    alert("SUCCESS!");
    // const userPassword = {
    //   oldPassword: password,
    //   newPassword: new_password,
    // };
    // const req = new Request("http://localhost:3001/api/update-password", {
    //   method: "PUT",
    //   headers: new Headers({ "Content-Type": "application/json" }),
    //   body: JSON.stringify(userPassword),
    // });
    // fetch(req).then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // });
  };

  return (
    <div style={{ display: `${props.display}` }}>
      <div
        className={classes.backdrop}
        onClick={() => props.setDisplay("none")}
      />
      <div className={classes.popup}>
        <Card className={classes.modal}>
          <h3 className={classes.title}>Change Password</h3>
          <div className={classes.curr_pwd}>
            <div className={classes.pwdTitle}>Current password</div>
            <input
              className={classes.pwdInputArea}
              type="password"
              placeholder="Current password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                errorHandler(e.target.value);
              }}
            />
            <div className={classes.err_msg}>{error}</div>
          </div>
          <hr className={classes.line} />
          <div className={classes.new_pwd}>
            <div className={classes.pwdTitle}>New Password</div>
            <input
              className={classes.pwdInputArea}
              type="password"
              placeholder="New password..."
              value={new_password}
              onChange={(e) => {
                setNewPassword(e.target.value);
                errorHandler(e.target.value);
              }}
            />
            <div className={classes.err_msg}>{`${isNotMatch} ${error}`}</div>
          </div>
          <div className={classes.retype_pwd}>
            <div className={classes.pwdTitle}>Re-type Password</div>
            <input
              className={classes.pwdInputArea}
              type="password"
              value={retype_password}
              placeholder="Re-type new password..."
              onChange={(e) => {
                setRetypePassword(e.target.value);
                errorHandler(e.target.value);
              }}
            />
            <div className={classes.err_msg}>{`${isNotMatch} ${error}`}</div>
          </div>

          <div className={classes.buttons}>
            <span
              className={classes.cancel_btn}
              onClick={() => props.setDisplay("none")}
            >
              Cancel
            </span>
            <button
              className={classes.pwd_btn}
              disabled={validateForm()}
              onClick={passwordChangeHandler}
            >
              Change password
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
