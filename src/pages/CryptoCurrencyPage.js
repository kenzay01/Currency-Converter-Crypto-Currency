import { useEffect, useState } from "react";
import CryptoCurrencyRow from "../components/CryptoCurrencyRow";
import CryptoModule from "../components/CryptoModule";
import Skeleton from "../components/Skeleton";
import Router from "../components/Router";

function CryptoCurrencyPage() {
  const [inputValue, setInputValue] = useState("");
  const [listOfCryptoCurrency, setListOfCryptoCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModule, setOpenModule] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = (cryptoCurrency) => {
    setSelectedCrypto(cryptoCurrency);
    setOpenModule(true);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const triggerHeight = 250;
    setIsSticky(scrollTop > triggerHeight);
  };

  useEffect(() => {
    setIsLoading(true);
    window.addEventListener("scroll", handleScroll);
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => {
        setListOfCryptoCurrency(data);
        setIsLoading(false);
      });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredCryptoCurrency = listOfCryptoCurrency.filter(
    (cryptoCurrency) => {
      return (
        cryptoCurrency.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        cryptoCurrency.symbol.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  );

  const renderCryptoCurrency = filteredCryptoCurrency.map((cryptoCurrency) => (
    <CryptoCurrencyRow
      key={cryptoCurrency.id}
      {...cryptoCurrency}
      onClick={() => handleClick(cryptoCurrency)}
    />
  ));

  let content;

  if (isLoading) {
    content = <Skeleton times={4} />;
  } else if (filteredCryptoCurrency.length === 0) {
    content = <h1>No CryptoCurrency Found</h1>;
  } else {
    content = renderCryptoCurrency;
  }

  return (
    <div className="crypto-page">
      <div className="crypto-container">
        <div className={`crypto-search ${isSticky ? "sticky" : ""}`}>
          <h1>Crypto Currency</h1>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Example: Bitcoin or btc"
          />
        </div>
        <div className="crypto-info">{content}</div>
      </div>
      {openModule && (
        <CryptoModule
          cryptoCurrency={selectedCrypto}
          onClose={() => setOpenModule(false)}
        />
      )}
    </div>
  );
}

export default CryptoCurrencyPage;
