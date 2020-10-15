import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={props.imageUrl} alt="" />

      <button>Add to Cart</button>
    </div>
  );
}
