import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Market.css";
// import Coins from "./Coins";

function Marketlist() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const Coins = ({ symbol, image, name, price, priceChange }) => {
    return (
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <p className="coin-symbol">{symbol}</p>
            <img src={image} alt="crypto" className="image" />
            <h1 className="cryptoName">{name}</h1>
          </div>
          <div className="coin-data">
            <p className="coin-price">{price}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="coin-list">
      <div className="coin-search">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            symbol={coin.symbol}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default Marketlist;
