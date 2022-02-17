import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import MenuLogoDark from "./../../assets/Logo/D_menulogo.svg";

const Menubar = () => {
  return (
    <div className="menubar">
      <Link to="/">
        <img src={MenuLogoDark} className="menulogo" alt="MenuLogo" />
      </Link>
    </div>
  );
};

export default Menubar;
