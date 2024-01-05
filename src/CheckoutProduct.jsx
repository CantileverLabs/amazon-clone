import React from "react";

// Styles
import "./CheckoutProduct.css";

// Context
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, rating, price, count }) => {
  const dispatch = useStateValue()[1];

  const incrementProduct = () => {
    dispatch({
      type: "INCREMENT_PRODUCT_COUNT",
      id: id,
    });
  };

  const decrementProduct = () => {
    dispatch({
      type: "DECREMENT_PRODUCT_COUNT",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        {/* <button onClick={removeFromBasket}>Remove from basket</button> */}
        <div className="checkoutProduct_btn_group">
          <button onClick={decrementProduct}>-</button>
          <span>{count}</span>
          <button onClick={incrementProduct}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
