import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={alexaCamara}></img>
      </div>
    </div>
  );
}
