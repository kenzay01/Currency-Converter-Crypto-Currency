import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
function CryptoCurrencyRow({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  high_24h,
  low_24h,
  onClick,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 782) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth <= 782]);

  return (
    <div key={id} className="crypto-container-row" onClick={onClick}>
      <div className="crypto-row">
        <div className="crypto-name">
          <div className="crypto-logo-sym">
            <img src={image} alt={name} />
            <h1>{name}</h1>
          </div>
          <h1>{symbol.toUpperCase()}</h1>
        </div>
        <div className="crypto-price-row">
          <div className="crypto-price">
            <h1>${current_price}</h1>
          </div>
          <div className="crypto-percentage">
            <h1
              className={
                price_change_percentage_24h < 0 ? "crypto-low" : "crypto-high"
              }
            >
              {price_change_percentage_24h.toFixed(2)}%
            </h1>
          </div>
          {isMobile && (
            <div className="crypto-high-low">
              <h1>
                [<FaArrowUpLong />
                {high_24h} | <FaArrowDownLong />
                {low_24h}]
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CryptoCurrencyRow;
