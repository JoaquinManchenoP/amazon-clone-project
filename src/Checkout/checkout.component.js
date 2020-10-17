import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal.component";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct.component";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/pantry/storefront/2020/XCM_Manual_1226089_1183236_US_us_amazon_pantry_how_it_works_storefront_banner_3109161_1500x250_2X_es_US.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*Basket Item*/}
          {/*Basket Item*/}
          {/*Basket Item*/}
          {/*Basket Item*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
