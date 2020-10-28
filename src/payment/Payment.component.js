import React from "react";
import "./payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct.component";
import { Link } from "react-router-dom";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section delivery adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>400 Meeting</p>
            <p>Charleston SC</p>
          </div>
        </div>

        {/* payment Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">{/* Strip Payment*/}</div>
        </div>
      </div>
    </div>
  );
}
