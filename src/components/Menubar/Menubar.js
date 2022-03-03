import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import MenuLogoDark from "./../../assets/Logo/D_menulogo.svg";
import MenuLogoLight from "./../../assets/Logo/L_menulogo.svg";
import ToggleSwitch from "./../ModeSwitch/Switch";

const Menubar = ({ theme, setTheme }) => {
  return (
    <div className="menubar">
      <Link to="/">
        <img
          src={theme === "dark" ? MenuLogoDark : MenuLogoLight}
          className="menulogo"
          alt="MenuLogo"
        />
      </Link>
      <ToggleSwitch theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Menubar;
