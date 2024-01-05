export const initialState = {
  basket: {},
  user: null,
};

export const getBasketTotal = (basket) =>
  Object.keys(basket).reduce(
    (amount, item) => basket[item].price * basket[item].count + amount,
    0
  );

export const getBasketTotalItems = (basket) =>
  Object.keys(basket).reduce((count, keys) => basket[keys].count + count, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET": {
      // Logic for adding item to basket
      let basket = { ...state.basket };
      let payloadId = action.payload.id;
      if (basket[payloadId]) {
        basket[payloadId] = {
          ...basket[payloadId],
          count: basket[payloadId].count + 1,
        };
      } else {
        basket[payloadId] = action.payload;
      }
      return {
        ...state,
        basket,
      };
    }

    case "INCREMENT_PRODUCT_COUNT": {
      let productId = action.id;
      let basket = { ...state.basket };
      if (basket[productId]) {
        basket[productId] = {
          ...basket[productId],
          count: basket[productId].count + 1,
        };
      }
      return { ...state, basket };
    }

    case "DECREMENT_PRODUCT_COUNT": {
      let productId = action.id;
      let basket = { ...state.basket };
      if (basket[productId]) {
        basket[productId] = {
          ...basket[productId],
          count: basket[productId].count - 1,
        };
      }
      return { ...state, basket };
    }

    case "REMOVE_FROM_BASKET":
      let newBasket = state.basket;

      delete newBasket[action.id];

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
