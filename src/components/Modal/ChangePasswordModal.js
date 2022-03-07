import React from "react";
import Card from "../Card/Card";
import classes from "./ChangePasswordModal.module.css";
import { useForm } from "react-hook-form";

const ChangePasswordModal = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    reset,
    clearErrors,
    formState,
  } = useForm();

  const passwordChangeHandler = (data) => {
    console.log(data);
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

  // FOR INPUT VALIDATION
  const onSubmit = (data, e) => {
    passwordChangeHandler(data);
    reset();
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
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.pwd_box}>
              <div className={classes.pwdTitle}>Current password</div>
              <input
                className={classes.pwdInputArea}
                type="password"
                placeholder="Current password..."
                {...register("curr_password", {
                  required: "This field is required.",
                  minLength: {
                    value: 8,
                    message:
                      "Password must have at least 8 characters and only alphanumeric and '_' are accepted.",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "Password cannot be more than 16 characters and only alphanumeric and '_' are accepted.",
                  },
                  pattern: /^[a-zA-Z0-9-_!?]+$/,
                })}
              />
              <div className={classes.err_msg}>
                {formState.errors.curr_password && (
                  <span>{formState.errors?.curr_password.message}</span>
                )}
              </div>
            </div>
            <hr className={classes.line} />
            <div className={classes.pwd_box}>
              <div className={classes.pwdTitle}>New Password</div>
              <input
                className={classes.pwdInputArea}
                type="password"
                placeholder="New password..."
                {...register("new_password", {
                  onChange: (e) => {
                    if (e.target.value !== getValues("retype_password")) {
                      setError("new_password", {
                        type: "manual",
                        message: "Password must match.",
                      });
                    } else {
                      clearErrors(["new_password", "retype_password"]);
                    }
                  },
                  required: "This field is required.",
                  minLength: {
                    value: 8,
                    message:
                      "Password must have at least 8 characters and only alphanumeric and '_' are accepted.",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "Password cannot be more than 16 characters and only alphanumeric and '_' are accepted.",
                  },
                  pattern: /^[a-zA-Z0-9-_!?]+$/,
                })}
              />
              <div className={classes.err_msg}>
                {formState.errors?.new_password && (
                  <span>{formState.errors?.new_password.message}</span>
                )}
              </div>
            </div>
            <div className={classes.pwd_box}>
              <div className={classes.pwdTitle}>Re-type Password</div>
              <input
                className={classes.pwdInputArea}
                type="password"
                placeholder="Re-type new password..."
                {...register("retype_password", {
                  onChange: (e) => {
                    if (e.target.value !== getValues("new_password")) {
                      setError("retype_password", {
                        type: "manual",
                        message: "Password must match.",
                      });
                    } else {
                      clearErrors(["new_password", "retype_password"]);
                    }
                  },
                  required: "This field is required.",
                  minLength: {
                    value: 8,
                    message:
                      "Password must have at least 8 characters and only alphanumeric and '_' are accepted.",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "Password cannot be more than 16 characters and only alphanumeric and '_' are accepted.",
                  },
                  pattern: /^[a-zA-Z0-9-_!?]+$/,
                })}
              />
              <div className={classes.err_msg}>
                {formState.errors?.retype_password && (
                  <span>{formState.errors?.retype_password.message}</span>
                )}
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
                className={classes.pwd_btn}
                type="submit"
                // disabled={validateForm()}
              >
                Change password
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
