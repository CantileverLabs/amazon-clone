import React from "react";

// Styles
import "./Checkout.css";

// Components
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

// Redux
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img className="checkout__ad" src="" alt="" /> */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>{" "}
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {Object.keys(basket).map((item) => (
              <>
                <CheckoutProduct
                  id={basket[item].id}
                  title={basket[item].title}
                  image={basket[item].image}
                  price={basket[item].price}
                  rating={basket[item].rating}
                  count={basket[item].count}
                />
                <hr />
              </>
            ))}
          </div>
        )}
      </div>
      {Object.keys(basket).length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
