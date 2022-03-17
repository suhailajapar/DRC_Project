import "./Market.css";

//Card for MGainSlider & MLossSlider
const GainLossCards = ({ src, name, price, percentage }) => {
  return (
    <div className="card-view">
      <div className="card-header">
        <div className="card-name">{name}</div>
        <div className="card-arrow">
          <span
            className={`coin-precentage ${
              Number.parseFloat(percentage) > 0 ? "arrow up" : "arrow down"
            }`}
          ></span>
        </div>
        <div className="card-percentage">
          <p
            className={`coin-precentage ${
              Number.parseFloat(percentage) > 0 ? "green" : "red"
            }`}
          >
            {Number.parseFloat(percentage).toFixed(2)}%
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-img">
          <img src={src} className="img" />
        </div>
        <div className="card-price">
          {price === 0 ? (
            <p>Loading...</p>
          ) : (
            Number.parseFloat(price).toFixed(2)
          )}
        </div>
      </div>
    </div>
  );
};

export default GainLossCards;
