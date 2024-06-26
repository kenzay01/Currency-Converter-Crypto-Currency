import SideBar from "./components/SideBar";
import Router from "./components/Router";
import GlobalCurrencyPage from "./pages/GlobalCurrencyPage";
import CryptoCurrencyPage from "./pages/CryptoCurrencyPage";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import { RiMenuUnfold4Line2, RiMenuUnfold3Line2 } from "react-icons/ri";
export default function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div className="main-container">
      <button
        onClick={handleClick}
        className={`menu ${activeMenu ? "" : "closed"}`}
      >
        {activeMenu ? (
          <RiMenuUnfold3Line2 className="menu-icon" />
        ) : (
          <RiMenuUnfold4Line2 className="menu-icon closed" />
        )}
      </button>
      {activeMenu && <SideBar className="sidebar" />}
      <div className="content">
        <Router to="/Currency-Converter-Crypto-Currency/">
          <MainPage />
        </Router>
        <Router to="/Currency-Converter-Crypto-Currency/globalCurrency">
          <GlobalCurrencyPage />
        </Router>
        <Router to="/Currency-Converter-Crypto-Currency/cryptoCurrency">
          <CryptoCurrencyPage />
        </Router>
      </div>
    </div>
  );
}
