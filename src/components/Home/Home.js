import React from "react";
// import Navbar from "../Menubar/Navbar";
import Footer from "./../Footer/Footer";
import "./Home.css";
import CryptoLogo from "./../../assets/LandingPageAsset/Cryptos.svg";
import Dboard from "./../../assets/LandingPageAsset/iMac.svg";
import { Link } from "react-router-dom";
// import Marketpage from "./../Market/Market";

function Home() {
  return (
    <>
      {/* <Navbar className="navbar" /> */}
      <div className="landingPage">
        <section className="lpage lpage-four" id="four">
          <div className="fourth">
            <div className="fourth-title">
              CHOOSE HIKERS
              <br />
              GET RICHER
            </div>
            <div className="lpage-btn">
              <Link to="/signup">Register Now!</Link>
            </div>
          </div>
        </section>
        <section className="lpage" id="three">
          <div className="third">
            <div className="third-title">Cryptocurrency,</div>
            <div className="third-subtitle align">
              The currency of the future
            </div>
            <img
              src={CryptoLogo}
              className="align"
              alt="cryptocurrencies logo"
            />
          </div>
        </section>
        <section className="lpage" id="two">
          <div className="second">
            <div className="second-title">Trade with Clarity</div>
            <img src={Dboard} className="dboard-img" alt="dashboard demo" />
            <div className="second-subtitle">
              A systematic Dashboard to show your progress and
              <br />
              holdings which assists your portfolio handling.
            </div>
          </div>
        </section>
        <section className="lpage lpage-one" id="one">
          <div className="first">
            <div className="first-title">Trade with Us</div>
            <div className="first-subtitle align">
              Every successful trader
              <br />
              has to start somewhere
            </div>
            <div className="lpage-btn first-btn align">
              <Link to="/signup">Start Trading Now!</Link>
            </div>
          </div>
          <Footer className="home-footer" />
        </section>
      </div>
    </>
  );
}

export default Home;
