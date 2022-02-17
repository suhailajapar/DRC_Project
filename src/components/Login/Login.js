import React from "react";
import Menubar from "./../Menubar/Menubar";
import Footer from "./../Footer/Footer";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Menubar />
      <div className="login-container">
        <div className="inner-container">
          <div className="main-title">Hikers Account Login</div>
          <div className="sub-title">Welcome Back, Hikers!</div>
          <div className="input-title">Email</div>
          <input className="input" type="text" placeholder="Email" />
          <div className="input-title">Password</div>
          <input className="input" type="text" placeholder="Password" />
          <input type="submit" className="login-button" value="Login" />
          <div>
            Not a Hikers? <span className="links">Register Now</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
