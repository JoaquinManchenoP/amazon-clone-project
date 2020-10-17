import React from "react";
import "./Header.css";
import logo from "../image.assets/amazon-logo.png";
import HamburgerMenu from "./Hamburger-menu.js";
import SearchIcon from "@material-ui/icons/Search";
import flag from "../image.assets/usa-flag.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="hamburger-menu">
        <HamburgerMenu />
      </div>
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
        <img className="header__flag" src={flag} alt="flag" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="header__option">
            <span className="header__optionLine1">Hello, Sign in</span>
            <span className="header__optionLine2">Accounts & Lists</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionPrime"> Try Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon style={{ fontSize: 35 }} />
            <span className="header__optionLine2 header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
