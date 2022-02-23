import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./../Menubar/Menubar";
import Footer from "./../Footer/Footer";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Menubar />
      <div className="login-container">
        <div className="inner-container">
          <div className="login-main-title">Hikers Account Login</div>
          <div className="login-sub-title">Welcome Back, Hikers!</div>
          <div className="login-input-title">Email</div>
          <input className="login-input" type="text" placeholder="Email" />
          <div className="login-input-title">Password</div>
          <input className="login-input" type="text" placeholder="Password" />
          <input type="submit" className="login-button" value="Login" />
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
