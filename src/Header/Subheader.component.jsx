import React from "react";
import "./Subheader.css";

export default function Subheader() {
  return (
    <div className="subheader">
      <div className="location">
        {/*location icon */}
        <span className="location__line1">Hello</span>
        <span className="location_line2">Select your adress</span>
      </div>

      <div className="subheader__menu">
        <span className="subheader__option">Best Sellers</span>
        <span className="subheader__option">Costumer Service</span>
        <span className="subheader__option">Amazon Basics</span>
        <span className="subheader__option">New Releases</span>
        <span className="subheader__option">Today's Deals</span>
      </div>

      <div className="podcast__option">
        <span>Stram podcasts FREE</span>
      </div>
    </div>
  );
}
