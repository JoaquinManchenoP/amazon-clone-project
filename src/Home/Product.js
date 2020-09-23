import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>sneaker</p>
        <p className="product__price">
          <small>$</small>
          <strong>80.00</strong>
        </p>

        <div className="product__rating">
          <p>rating</p>
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/61UtDdFQ4CL._AC_UL640_QL65_.jpg"
        alt=""
      />

      <button>Add to Cart</button>
    </div>
  );
}
