import { MdFlipCameraAndroid } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import CurrencySelect from "./CurrencySelect";
import { useEffect, useState } from "react";
function CurrencyForm() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [amout, setAmount] = useState(100);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSwapCurrency = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };
  useEffect(() => {
    getExchangeRate();
  }, []);
  const getExchangeRate = async () => {
    const API_KEY = "09fcf84f1cbb1e4cc1353094";
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const rate = (data.conversion_rate * amout).toFixed(2);
      setResult(`${amout} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };
  return (
    <form className="gl-converter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Enter Amount</label>
        <input
          type="number"
          className="form-input"
          required
          value={amout}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-currency-group">
        <div className="form-section">
          <label className="form-label">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>

        <div className="swap-icon-con" onClick={handleSwapCurrency}>
          <MdFlipCameraAndroid className="swap-icon" />
        </div>

        <div className="form-section">
          <label className="form-label">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`submit-button ${isLoading ? "loading" : ""}`}
      >
        {isLoading ? <IoReload className="reload" /> : "Get Exchange Rate"}
      </button>
      <p className="exchange-rate-result">
        {isLoading ? "Getting exchange rate..." : result}
      </p>
    </form>
  );
}

export default CurrencyForm;
