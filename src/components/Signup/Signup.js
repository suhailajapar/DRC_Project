import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Menubar from "../Menubar/Menubar";

const Signup = () => {
  return (
    <div className="signup-container">
      <Menubar />
      <div className="signbox">
        <div className="signup-main-title">Create Hikers Account</div>
        <div className="signup-sub-title">
          Be part of Hikers and start gaining!
        </div>

        <form>
          <label className="signup-input-title">Username</label>
          <input className="signup-input" type="text" placeholder="Username" />
          <label className="signup-input-title">Full Name</label>
          <input className="signup-input" type="text" placeholder="Full Name" />
          <label className="signup-input-title">Email</label>
          <input className="signup-input" type="text" placeholder="Email" />
          <label className="signup-input-title">Password</label>
          <input className="signup-input" type="text" placeholder="Password" />
          <label className="signup-input-title">Confirm Password</label>
          <input
            className="signup-input"
            type="text"
            placeholder="Confirm Password"
          />
          <div>
            <input
              type="submit"
              className="signup-button"
              value="Create Account"
            ></input>
          </div>
        </form>

        <div>
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
// }
export default Signup;
