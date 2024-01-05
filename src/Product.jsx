import React from "react";

// Styles
import "./Product.css";

// Context
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useStateValue()[1];

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        image,
        price,
        rating,
        count: 1,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
