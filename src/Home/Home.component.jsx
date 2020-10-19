import React from "react";
import "../Home/Home.css";
import alexaCamara from "../image.assets/alexa-camara.png";
import Product from "./Product.js";
import Advertisment from "./advertisment";

export default function Home() {
  var products = {
    jacket: {
      title: "Adidas Men's Essentials Wind Jacket",
      image: "https://m.media-amazon.com/images/I/81hzwV8K63L._AC_UL320_.jpg",
      id: "323",
    },
    ipad: {
      title:
        "New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (Latest Model, 4th Generation)",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71FePRgkiZL._AC_SL1500_.jpg",
      id: "523",
    },
    peacoat: {
      title:
        "Men's Mark Classic Wool Blend Pea Coat (Regular Big & Tall and Short)",
      image: "https://m.media-amazon.com/images/I/41khh9onYrL._AC_SL260_.jpg",
      price: 194.0,
      id: "540",
    },
    monitor: {
      title: "Asus ROG Strix XG49VQ 49” Curved Gaming FreeSync Monitor",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg",
      id: "893",
    },
    camera: {
      title: "Fujifilm Instax Mini 11 Instant Camera - Charcoal Grey",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71e-mHhnTGL._AC_SL1500_.jpg",
      id: "388",
    },
    game: {
      title: "FIFA 21 - PlayStation 4",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81UcwRuVjoL._SL1500_.jpg",
      id: "37",
    },
    alexa: {
      title:
        "All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SL1000_.jpg",
      id: 77,
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
            image={products.peacoat.image}
            title={products.peacoat.title}
            price={129.99}
            rating={4}
            id={products.peacoat.id}
            key={1}
          />
          <Product
            image={products.ipad.image}
            title={products.ipad.title}
            price={599.99}
            rating={3}
            id={products.ipad.id}
            key={2}
          />
          <Product
            image={products.jacket.image}
            title={products.jacket.title}
            price={89.99}
            rating={5}
            id={products.jacket.id}
            key={3}
          />
          <Advertisment />
        </div>

        <div className="home__row">
          <Product
            image={products.game.image}
            title={products.game.title}
            price={59.99}
            rating={4}
            id={products.game.id}
            key={4}
          />
          <Product
            image={products.camera.image}
            title={products.camera.title}
            price={64.99}
            rating={3}
            id={products.camera.id}
            key={5}
          />
          <Product
            image={products.alexa.image}
            title={products.alexa.title}
            price={99.99}
            rating={5}
            id={products.alexa.id}
            key={6}
          />
        </div>

        <div className="home__row">
          <Product
            image={products.monitor.image}
            title={products.monitor.title}
            price={399.99}
            rating={3}
            id={products.monitor.id}
            key={7}
          />
        </div>

        <div className="footer">
          <h4>Contact me</h4>
        </div>
      </div>
    </div>
  );
}
