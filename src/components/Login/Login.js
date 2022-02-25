import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./../Menubar/Menubar";
import Footer from "./../Footer/Footer";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
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
    <div className="login">
      <Menubar theme={theme} setTheme={setTheme} />
      <div className="login-container">
        <div className="inner-container">
          <div className="login-main-title">Hikers Account Login</div>
          <div className="login-sub-title">Welcome Back, Hikers!</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div className="login-input-title">
              Email
              <span className="error-message">
                {errors?.Email?.type === "pattern" && (
                  <p>Enter valid email only</p>
                )}
                {errors?.Email?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>
            </div>
            <input
              className="login-input"
              {...register("Email", {
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                required: true,
              })}
            />
            <div className="login-input-title">
              Password
              <span className="error-message">
                {errors?.Password?.type === "pattern" && (
                  <p>Only Alphanumeric input accepted</p>
                )}
                {errors.Password && (
                  <p style={{ marginRight: "10px" }}>Min 10 digits</p>
                )}
                {errors?.Password?.type === "required" && (
                  <p>This field is required</p>
                )}
              </span>
            </div>
            <input
              type="password"
              className="login-input"
              {...register("Password", {
                required: true,
                minLength: 10,
                maxLength: 16,
                pattern: /^[0-9a-zA-Z]*$/,
              })}
            />
            <input type="submit" className="login-button"></input>
          </form>

          <div>
            Not a Hikers?{" "}
            <Link to="/signup" className="links">
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
