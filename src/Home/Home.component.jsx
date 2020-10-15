import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";
import Product from "./Product.js";
import Advertisment from "./advertisment";

export default function Home() {
  var products = {
    jacket: {
      name: "Adidas Men's Essentials Wind Jacket",
      image: "https://m.media-amazon.com/images/I/81hzwV8K63L._AC_UL320_.jpg",
      price: "48.00",
    },
    boots: {
      name: "Amazon Essentials Women's Tall Rain Boot",
      image: "https://m.media-amazon.com/images/I/71iHp0fOFXL._AC_UL320_.jpg",
      price: "24.00",
    },
    peacoat: {
      name:
        "Men's Mark Classic Wool Blend Pea Coat (Regular Big & Tall and Short)",
      image: "https://m.media-amazon.com/images/I/41khh9onYrL._AC_SL260_.jpg",
      price: 194.0,
    },
    monitor: {
      name: "Asus ROG Strix XG49VQ 49” Curved Gaming FreeSync Monitor",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg",
    },
    camera: {
      name: "Fujifilm Instax Mini 11 Instant Camera - Charcoal Grey",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71e-mHhnTGL._AC_SL1500_.jpg",
    },
    game: {
      name: "FIFA 21 - PlayStation 4",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81UcwRuVjoL._SL1500_.jpg",
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
            price={129.99}
            rating={4}
          />
          <Product
            imageUrl={products.boots.image}
            name={products.boots.name}
            price={14.68}
            rating={3}
          />
          <Product
            imageUrl={products.jacket.image}
            name={products.jacket.name}
            price={89.99}
            rating={5}
          />
          <Advertisment />
        </div>

        <div className="home__row">
          <Product
            imageUrl={products.game.image}
            name={products.game.name}
            price={59.99}
            rating={4}
          />
          <Product
            imageUrl={products.camera.image}
            name={products.camera.name}
            price={64.99}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            imageUrl={products.monitor.image}
            name={products.monitor.name}
            price={589.0}
            rating={3}
          />
        </div>

        <div className="footer">
          <h4>Contact me</h4>
        </div>
      </div>
    </div>
  );
}
