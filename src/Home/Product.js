import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>80.00</strong>
        </p>

        <div className="product__rating">
          <p>rating</p>
        </div>
      </div>

      <img src={props.imageUrl} alt="" />

      <button>Add to Cart</button>
    </div>
  );
}
