import React from "react";
import "./Subheader.css";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

export default function Subheader() {
  return (
    <div className="subheader">
      <div className="location__withIcon">
        <div className="just__location__icon">
          <PersonPinCircleIcon />
        </div>
        <div className="location">
          <span className="location__line1">Hello</span>
          <span className="location_line2">Select your adress</span>
        </div>
      </div>

      <div className="subheader__menu">
        <span className="subheader__option">Best Sellers</span>
        <span className="subheader__option">Costumer Service</span>
        <span className="subheader__option">Amazon Basics</span>
        <span className="subheader__option">New Releases</span>
        <span className="subheader__option">Today's Deals</span>
        <span className="subheader__option">Whole Foods</span>
        <span className="subheader__option">Gift Cards</span>
      </div>

      <div className="supplies__option">
        <span>Low prices on school supplies</span>
      </div>
    </div>
  );
}
