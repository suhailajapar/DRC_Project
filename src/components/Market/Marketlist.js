import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Market.css";

function Marketlist({ closePopout, props }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=20&page=1&sparkline=false"
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

  const Coins = ({ key, symbol, image, name, price, priceChange } = props) => {
    return (
      <tbody className="table-body">
        <tr id={key}>
          <td>
            <p className="coin-symbol">{symbol}</p>
          </td>
          <td>
            <img src={image} alt="crypto" className="image" />
            <p className="cryptoName">{name}</p>
          </td>
          <td>
            <p className="coin-price">{price}</p>
          </td>
          <td>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </td>
        </tr>
      </tbody>
    );
  };

  return (
    <>
      <div className="coin-market">
        <div className="list-top">
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
          <div className="coin-close">
            <button className="close-button" onClick={() => closePopout(false)}>
              X
            </button>
          </div>
        </div>
        <table className="coin-table">
          <thead className="table-header">
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>24 Hours %</th>
            </tr>
          </thead>
          <div className="coin-list">
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
        </table>
      </div>
    </>
  );
}

export default Marketlist;
