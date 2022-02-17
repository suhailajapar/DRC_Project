import React from "react";
import Navbar from "./../Home/Navbar";
import Footer from "./../Footer/Footer";
import "./Home.css";
// import Marketpage from "./../Market/Market";

function Home() {
  return (
    <>
      <Navbar />
      <div className="landingPage">
        <section className="lpage" id="four">
          <div className="fourth">
            <div className="fourth-title">
              CHOOSE HIKERS
              <br />
              GET RICHER
            </div>
            <div className="lpage-btn">
              <a href="/">Register Now!</a>
            </div>
          </div>
        </section>
        <section className="lpage" id="three">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
        <section className="lpage" id="two">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
        <section className="lpage lpage-one" id="one">
          <div className="first">
            <div className="first-title">Trade with Us</div>
            <div className="first-subtitle">
              Every successful trader
              <br />
              has to start somewhere
            </div>
            <div className="lpage-btn first-btn">
              <a href="/">Start Trading Now!</a>
            </div>
          </div>
          <Footer className="home-footer" />
        </section>
      </div>
    </>
  );
}

export default Home;
