import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
function CryptoModule({ cryptoCurrency, onClose }) {
  const [cryptoAmount, setCryptoAmount] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  if (!cryptoCurrency) return null;
  return ReactDOM.createPortal(
    <div className="crypto-module-container">
      <div className="crypto-module">
        <button onClick={onClose} className="crypto-module-close-btn">
          <IoMdClose className="close-btn" />
        </button>
        <div className="crypto-module-logo-name">
          <img src={cryptoCurrency.image} alt={cryptoCurrency.name} />
          <h1>{cryptoCurrency.name}</h1>
        </div>
        <div className="crypto-module-info">
          <p>Current Price: ${cryptoCurrency.current_price}</p>
          <p>
            Price Change (24h):{" "}
            <span
              className={
                cryptoCurrency.price_change_percentage_24h < 0
                  ? "crypto-low"
                  : "crypto-high"
              }
            >
              {cryptoCurrency.price_change_percentage_24h.toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="crypto-module-calculate">
          <label>{`Amount of ${cryptoCurrency.symbol.toUpperCase()} : `}</label>
          <input
            type="number"
            id="crypto-amount"
            value={cryptoAmount || ""}
            onChange={(e) => setCryptoAmount(e.target.value)}
          />
        </div>
        <div className="crypto-module-result">
          <h1>${cryptoAmount * cryptoCurrency.current_price}</h1>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default CryptoModule;
