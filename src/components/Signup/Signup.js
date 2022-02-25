import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import { useForm } from "react-hook-form";


const Signup = () => {
  const [theme, setTheme] = React.useState("dark");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="signup-container">
      <Menubar theme={theme} setTheme={setTheme} />
      <div className="signbox">
        <div className="signup-main-title">Create Hikers Account</div>
        <div className="signup-sub-title">
          Be part of Hikers and start gaining!
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <label className="signup-input-title">
              Username
              <span className="error-message">
                {" "}
                {errors?.username?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.username?.type === "maxLength" && (
                  <p>username cannot exceed 16 characters</p>
                )}
                {errors?.username?.type === "pattern" && (
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
                {errors?.fullname?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.fullname?.type === "maxLength" && (
                  <p>Full name cannot exceed 50 characters</p>
                )}
                {errors?.fullname?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
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
                {errors?.Email?.type === "pattern" && (
                  <p>Enter valid email only</p>
                )}
                {errors?.Email?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>
            </label>
            <input
              className="signup-input"
              placeholder="Email"
              {...register("Email", {
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                required: true,
              })}
            />
            <label className="signup-input-title">
              Password
              <span className="error-message">
                {" "}
                {errors?.Password?.type === "pattern" && (
                  <p>Only Alphanumeric and underscores are accepted</p>
                )}
                {errors.Password && (
                  <p style={{ marginRight: "10px" }}>Min 10 digits</p>
                )}
                {errors?.Password?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>
            </label>
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: true,
                minLength: 10,
                maxLength: 16,
                pattern: /^[a-zA-Z0-9-_]+$/,
              })}
            />
            <label className="signup-input-title">Confirm Password</label>
            <input name="" className="signup-input" type="password" />
            <div>
              <input
                type="submit"
                className="signup-button"
                value="Create Account"
                div
              ></input>
            </div>
          </form>
        </div>

        <div id="reg">
          Already registered?{" "}
          <Link to="/login">
            <span className="links">Log In</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
