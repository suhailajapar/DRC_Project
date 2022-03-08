import React, { useState, useEffect, useRef } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import { useForm } from "react-hook-form";
import ToLoginModal from "../Modal/ToLoginModal";

const Signup = () => {
  const [theme, setTheme] = useState("dark");
  const { register, handleSubmit, formState } = useForm({ mode: "onchange" });
  const [successMsg, setSuccessMsg] = useState("");
  const [display, setDisplay] = useState("none");
  const toLoginHandler = () => {
    setDisplay("unset");
  };

  //Send to backend for registration
  const userRegister = (data) => {
    const userInfo = {
      ...data,
      date_joined: new Date().toLocaleString(),
    };
    const req = new Request("http://192.168.100.140:3001/user/register", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(userInfo),
    });
    fetch(req).then((res) => {
      res.json().then((data) => {
        setSuccessMsg(data.message);
        return console.log(successMsg);
      });
    });
  };

  // FOR VALIDATION
  const onSubmit = (data, e) => {
    userRegister(data);
    e.target.reset();
    toLoginHandler();
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="signup-container">
      <ToLoginModal display={display} onSuccessMsg={successMsg} />
      <Menubar theme={theme} setTheme={setTheme} />
      <div className="signbox">
        <div className="signup-inner-container">
          <div className="signup-main-title">Create Hikers Account</div>
          <div className="signup-sub-title links">
            Be part of Hikers and start gaining!
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {" "}
              <label className="signup-input-title">
                Username
                <span className="error-message">
                  {" "}
                  {formState.errors?.username?.type === "required" && (
                    <p>This field is required</p>
                  )}
                  {formState.errors?.username?.type === "maxLength" && (
                    <p>username cannot exceed 16 characters</p>
                  )}
                  {formState.errors?.username?.type === "pattern" && (
                    <p>Only alphanumeric input or underscores are accepted</p>
                  )}
                </span>
              </label>
              <input
                placeholder="Username"
                className="signup-input"
                {...register("username", {
                  required: true,
                  maxLength: 16,
                  pattern: /^[a-zA-Z0-9-_]+$/,
                })}
              />
              <label className="signup-input-title">
                Full Name
                <span className="error-message">
                  {" "}
                  {formState.errors?.fullname?.type === "required" && (
                    <p>This field is required.</p>
                  )}
                  {formState.errors?.fullname?.type === "maxLength" && (
                    <p>Full name cannot exceed 50 characters.</p>
                  )}
                  {formState.errors?.fullname?.type === "pattern" && (
                    <p>Alphabetical characters only.</p>
                  )}
                </span>
              </label>
              <input
                placeholder="Full Name"
                className="signup-input"
                {...register("fullname", {
                  required: true,
                  maxLength: 50,
                  pattern: /^[a-zA-Z ]*$/,
                })}
              />
              <label className="signup-input-title">
                Email
                <span className="error-message">
                  {formState.errors?.email?.type === "pattern" && (
                    <p>Enter valid email only.</p>
                  )}
                  {formState.errors?.email?.type === "required" && (
                    <p>This field is required.</p>
                  )}
                </span>
              </label>
              <input
                className="signup-input"
                placeholder="Email"
                {...register("email", {
                  pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  required: true,
                })}
              />
              <label className="signup-input-title">
                Password
                <span className="error-message">
                  {" "}
                  {formState.errors?.Password?.type === "pattern" && (
                    <p>Only Alphanumeric and underscores are accepted.</p>
                  )}
                  {formState.errors.Password && (
                    <p style={{ marginRight: "10px" }}>
                      Password must have at least 8 characters.
                    </p>
                  )}
                  {formState.errors?.Password?.type === "required" && (
                    <p>This field is required.</p>
                  )}
                </span>
              </label>
              <input
                className="signup-input"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 16,
                  pattern: /^[a-zA-Z0-9-_!?]+$/,
                })}
              />
              <label className="signup-input-title">Confirm Password</label>
              <input
                name=""
                className="signup-input"
                placeholder="Repeat password"
                type="password"
              />
              <div id="create-acc">
                <button
                  type="submit"
                  // disabled={formState.isDirty}
                  className="signup-button"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>

          <div id="reg">
            Already registered?{" "}
            <Link to="/login" className="links">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
