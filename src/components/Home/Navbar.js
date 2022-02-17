import React from "react";
import { Link } from "react-router-dom";
import MenuLogoDark from "./../../assets/Logo/D_menulogo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={MenuLogoDark} className="menulogo" alt="MenuLogo" />
      </Link>
      <div className="nav-list">
        <Link to="/">
          <div>Market</div>
        </Link>
        <div className="login-signup">
          <Link to="/">
            <div className="login-btn">Login</div>
          </Link>
          <div className="divider"></div>
          <Link to="/about">
            <div className="signup-btn">Sign Up</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
