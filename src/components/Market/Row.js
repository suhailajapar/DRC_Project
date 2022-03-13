import useBinanceData from "./../ApiBinance/binance-data";
import "./Candlestickchart.css";

const Row = ({ pair, src, name }) => {
  const [, , , , , close, , , percent] = useBinanceData(pair);

  return (
      <tr className="list-row">
        <td>
          <img src={src} className="crypto_logo" />
        </td>
        <td>{name}</td>
        <td>{Number.parseFloat(close).toFixed(2)}</td>
        <td>
          <p
            className={`coin-precentage ${
              Number.parseFloat(percent) > 0 ? "green" : "red"
            }`}
          >
            {Number.parseFloat(percent).toFixed(2)}%
          </p>
        </td>
      </tr>
  );
};

export default Row;
