import CurrencyForm from "../components/CurrencyForm";
function GlobalCurrencyPage() {
  return (
    <div className="global-page">
      <div className="global-container">
        <h2 className="gl-cur-name">Currency Converter</h2>
        <CurrencyForm />
      </div>
    </div>
  );
}

export default GlobalCurrencyPage;
