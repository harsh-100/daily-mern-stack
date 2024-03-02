// reducers/productsReducer.js

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        products: state.products.map((item) => {
          return item.id === action.payload
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
    default:
      return state;
  }
};

export default productsReducer;
