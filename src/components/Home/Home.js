import React from "react";
import Footer from "./../Footer/Footer";
import "./Home.css";
import Dboard from "./../../assets/LandingPageAsset/iMac.svg";
import CoinBTC from "./../../assets/Logo/BTC.svg";
import CoinXRP from "./../../assets/Logo/XRP.svg";
import CoinETH from "./../../assets/Logo/ETH.svg";
import { Link } from "react-router-dom";
// import Marketpage from "./../Market/Market";

function Home() {
  return (
    <div className="page-color">
      {/* <Navbar className="navbar" /> */}
      <div className="landingPage">
        <section className="lpage lpage-four" id="four">
          <div className="fourth">
            <div className="fourth-title">
              Hikers &mdash; The Revolution.
              <div className="fourth-subtitle">
                Start monitoring your investment with us.
              </div>
            </div>
            <div className="lpage-btn">
              <Link to="/signup">Be a Hikers</Link>
            </div>
          </div>
        </section>
        <section className="lpage" id="three">
          <div className="third">
            <div className="third-title">Cryptocurrency,</div>
            <div className="third-subtitle align">
              The currency of the future
            </div>
            <div className="coins">
              <div className="coin">
                <img className="coin-logo1" src={CoinBTC} alt="coins" />
                <div className="shadow"></div>
              </div>
              <div className="coin coin2">
                <img className="coin-logo" src={CoinXRP} alt="coins" />
                <div className="shadow"></div>
              </div>
              <div className="coin coin3">
                <img className="coin-logo1" src={CoinETH} alt="coins" />
                <div className="shadow"></div>
              </div>
            </div>
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
    </div>
  );
}

export default Home;
