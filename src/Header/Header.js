import React from "react";
import "./Header.css";
import logo from "../image.assets/amazon-logo.png";
import HamburgerMenu from "./Hamburger-menu.js";
import SearchIcon from "@material-ui/icons/Search";
import flag from "../image.assets/usa-flag.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <div className="hamburger-menu">
        <HamburgerMenu />
      </div>

      <img className="header__logo" src={logo} alt="logo" />

      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
        <img className="header__flag" src={flag} alt="flag" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">Hello, Sign in</span>
          <span className="header__optionLine2">Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionPrime"> Try Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon style={{ fontSize: 35 }} />
          <span className="header__optionLine2 header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
