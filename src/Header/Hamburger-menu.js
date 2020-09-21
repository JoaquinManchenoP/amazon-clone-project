import React from "react";
import { VscMenu } from "react-icons/vsc";
import "./Hamburger-menu.css";

export default function HambrgerMenu() {
  return (
    <div className="hamburger__menu">
      <VscMenu size={25} />
    </div>
  );
}
