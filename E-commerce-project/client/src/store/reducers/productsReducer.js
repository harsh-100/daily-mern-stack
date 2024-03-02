// reducers/productsReducer.js

import { ProductActionKeys } from "../actions/productsActions";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionKeys.SET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ProductActionKeys.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((item) => {
          return item._id != action.payload;
        }),
      };
    case "SET_LOADING":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ProductActionKeys.INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((item) => {
          return item._id === action.payload
            ? {
                ...item,
                quantity: item.quantity ? item.quantity + 1 : 2,
                totalPrice: item.quantity
                  ? item.price * (item.quantity + 1)
                  : item.price * 2,
              }
            : item;
        }),
      };

    case ProductActionKeys.DECREASE_QUANTITY:
      return {
        ...state,

        products: state.products.map((item) => {
          return item._id === action.payload
            ? {
                ...item,
                quantity: item.quantity ? item.quantity - 1 : 0,
                totalPrice: item.quantity
                  ? item.price * (item.quantity - 1)
                  : 0,
              }
            : item;
        }),
      };
    default:
      return state;
  }
};

export default productsReducer;
