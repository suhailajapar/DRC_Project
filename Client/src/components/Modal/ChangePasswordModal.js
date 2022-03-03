import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./ChangePasswordModal.module.css";

const ChangePasswordModal = (props) => {
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [retype_password, setRetypePassword] = useState("");

  const validateForm = () => {
    return (
      password.length > 0 &&
      new_password.length > 0 &&
      new_password === retype_password
    );
  };

  const passLengthValidation = (e) => {
    const pwd = e.target.value;
    const re = new RegExp(`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*-_?!).{8,16}`);
    return re.test(pwd);
  };

  const passwordChangeHandler = () => {
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
      <div className={classes.backdrop} />
      <div className={classes.popup}>
        <Card className={classes.modal}>
          <h3>Change Password</h3>
          <div className={classes.pwdTitle}>Current password</div>
          <input
            className={classes.pwdInputArea}
            type="password"
            placeholder="Current password..."
            onChange={(e) => setPassword(e.target.value)}
            isPasswordError={passLengthValidation}
          />
          <hr className={classes.line} />
          <div className={classes.pwdTitle}>New Password</div>
          <input
            className={classes.pwdInputArea}
            type="password"
            placeholder="New password..."
            onChange={(e) => setNewPassword(e.target.value)}
            isPasswordError={passLengthValidation}
          />
          <div className={classes.pwdTitle}>Re-type Password</div>
          <input
            className={classes.pwdInputArea}
            type="password"
            placeholder="Re-type new password..."
            onChange={(e) => setRetypePassword(e.target.value)}
            isPasswordError={passLengthValidation}
          />
          <div className={classes.buttons}>
            <span className={classes.cancel_btn}>Cancel</span>
            <button
              className={classes.pwd_btn}
              disabled={!validateForm}
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
