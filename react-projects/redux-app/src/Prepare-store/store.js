// src/store.js

// import { composeWithDevTools } from "@redux-devtools/extension";

import { createStore } from "redux";

const initialState = {
  count: 0,
  name: "harsh",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "UPDATE":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
