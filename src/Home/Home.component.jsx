import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";
import Product from "./Product.js";
import Advertisment from "./advertisment";

export default function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <div className="home__container__image">
          <img className="home__image" src={alexaCamara}></img>
        </div>

        <div className="home__row">
          <Product
            imageUrl="https://m.media-amazon.com/images/I/41khh9onYrL._AC_SL260_.jpg"
            name="Men's Classic Breasted Peacoat"
          />
          <Product
            imageUrl="https://m.media-amazon.com/images/I/71iHp0fOFXL._AC_UL320_.jpg"
            name="Amazon Essentails"
          />
          <Product
            imageUrl="https://m.media-amazon.com/images/I/81hzwV8K63L._AC_UL320_.jpg"
            name="Men's Windbreaker Jacket"
          />
          <Advertisment />
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
