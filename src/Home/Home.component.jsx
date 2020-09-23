import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";
import Product from "./Product.js";

export default function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <div className="home__container__image">
          <img className="home__image" src={alexaCamara}></img>
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          {/*item 1 */}
          {/*item 1 */}
          {/*item 1 */}
          {/*item 1 */}
        </div>

        <div className="home__row">
          {/*item 1 */}
          {/*item 1 */}
        </div>
      </div>
    </div>
  );
}
