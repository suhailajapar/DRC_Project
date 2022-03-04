import React from "react";
import Footer from "./../Footer/Footer";
import CoinBTC from "./Media/BTC.svg";
import CoinAave from "./Media/Aave.svg";
import CoinETHC from "./Media/ETHC.svg";
import { Link } from "react-router-dom";
import First from "./Media/first_part.svg";
import Dboard from "./Media/feat_dbod.svg";
import ProfitLoss from "./Media/feat_pl.svg";
import Rocket from "./Media/feat_gainerloser.svg";
import TheGuy from "./Media/tradeWithUsGuy.svg";
import classes from "./Home.module.css";
// import Marketpage from "./../Market/Market";

function Home() {
  return (
    <div className={classes.landingPage}>
      <section className={classes.top_part}>
        <div className={classes.title}>
          <div className={classes.main_title}>
            Hikers &mdash; The Revolution.
            <p className={classes.subtitle}>
              Start monitoring your investment with us.
            </p>
          </div>
          <div className={classes.lpage_btn}>
            <Link to="/signup">Be a Hikers</Link>
          </div>
        </div>
        <div>
          <img
            src={First}
            alt="illustration"
            className={classes.illustration_one}
          />
        </div>
      </section>
      <section className={classes.second_part}>
        <div className={classes.coins}>
          <div className={classes.coin}>
            <img className={classes.coin_logo1} src={CoinBTC} alt="coins" />
            <div className={classes.shadow}></div>
          </div>
          <div className={`${classes.coin} ${classes.coin2}`}>
            <img className={classes.coin_logo} src={CoinETHC} alt="coins" />
            <div className={`${classes.shadow} ${classes.shadow1}`}></div>
          </div>
          <div className={`${classes.coin} ${classes.coin3}`}>
            <img className={classes.coin_logo1} src={CoinAave} alt="coins" />
            <div className={classes.shadow}></div>
          </div>
        </div>
        <div className={classes.crypto_news}>
          <div className={`${classes.main_title} ${classes.news_title}`}>
            Cryptocurrency
            <p className={classes.subtitle}>The currency of the future</p>
          </div>
          <iframe
            scrolling="yes"
            allowtransparency="true"
            frameBorder="0"
            src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF00&amp;currencies=BTC%2CETH%2CSHIB%2CBNB%2CSLP%2CXRP%2CLUNA%2CJST%2CKNC&amp;font_family=sans&amp;font_size=15&amp;header_bg_color=FFFFFF00&amp;header_text_color=ffffff&amp;link_color=4FA62A&amp;news_feed=recent&amp;posts_limit=10&amp;text_color=ffffff&amp;title=Recent%20Crypto%20News"
          ></iframe>
        </div>
      </section>
      <section className={classes.third_part}>
        <div className={classes.feature_section}>Our Feature</div>
        <div className={classes.features}>
          <div className={classes.first_feature}>
            <div className={classes.feature_one}>
              <div className={classes.feature_title}>Trade with Clarity</div>
              <div className={classes.description}>
                A systematic Dashboard to show your progress and holdings which
                assists your portfolio handling.
              </div>
            </div>
            <img src={Dboard} className={classes.dboard_img} alt="dashboard" />
          </div>
          <div className={classes.second_feature}>
            <img
              src={ProfitLoss}
              className={classes.profit_loss_img}
              alt="feature: profit loss"
            />
            <div className={classes.feature_two}>
              <div className={classes.feature_title}>
                Trade with better understanding
              </div>
              <div className={classes.description}>
                Track your progress of profitting and make note of your losses
                for future planning.
              </div>
            </div>
          </div>
          <div className={classes.third_feature}>
            <div className={classes.feature_three}>
              <div className={classes.feature_title}>Trade with percision</div>
              <div className={classes.description}>
                Know at a glance which Cryptocurrency will bring you better
                chance to gain more!
              </div>
            </div>
            <img src={Rocket} className={classes.rocket_img} alt="rocket" />
          </div>
        </div>
      </section>
      <section className={classes.fourth_part}>
        <img src={TheGuy} className={classes.guy_img} alt="illustration" />
        <div className={classes.last_part}>
          <div className={classes.main_title}>Trade with Us</div>
          <div className={classes.subtitle}>
            Every successful trader has to start somewhere.
          </div>
          <button className={classes.lpage_btn}>
            <Link to="/signup">Start Trading Now!</Link>
          </button>
        </div>
      </section>
      <Footer className={classes.home_footer} />
    </div>
  );
}

export default Home;
