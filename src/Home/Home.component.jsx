import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";
import Product from "./Product.js";
import Advertisment from "./advertisment";

export default function Home() {
  var products = {
    jacket: {
      name: "Men's Windbreaker Jacket",
      image: "https://m.media-amazon.com/images/I/81hzwV8K63L._AC_UL320_.jpg",
      price: "48.00",
    },
    boots: {
      name: "Amazon Essentails",
      image: "https://m.media-amazon.com/images/I/71iHp0fOFXL._AC_UL320_.jpg",
      price: "24.00",
    },
    peacoat: {
      name: "Men's Classic Breasted Peacoat",
      image: "https://m.media-amazon.com/images/I/41khh9onYrL._AC_SL260_.jpg",
      price: 194.0,
    },
    monitor: {
      name: "ASUS ROG Strix 49' ",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg",
    },
  };
  return (
    <div className="home">
      <div class="home__container">
        <div className="home__container__image">
          <img className="home__image" src={alexaCamara}></img>
        </div>

        <div className="home__row">
          <Product
            imageUrl={products.peacoat.image}
            name={products.peacoat.name}
            price={products.peacoat.price}
          />
          <Product
            imageUrl={products.boots.image}
            name={products.boots.name}
            price={products.boots.price}
          />
          <Product
            imageUrl={products.jacket.image}
            name={products.jacket.name}
            price={products.jacket.price}
          />
          <Advertisment />
        </div>

        <div className="home__row2">
          <Product imageUrl={products.monitor.image} />
          <Product imageUrl={products.monitor.image} />
        </div>

        <div className="home__row">
          {/*item 1 */}
          {/*item 1 */}
        </div>
      </div>
    </div>
  );
}
