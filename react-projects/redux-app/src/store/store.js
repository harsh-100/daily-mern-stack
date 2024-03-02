// import { createStore } from "redux";

// const initialState = {
//   count: 0,
//   name: "harsh",
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case "UPDATENAME":
//       return { ...state, name: action.payload };

//     default:
//       return { ...state };
//   }
// };

// const store = createStore(counterReducer);

// export default store;

// src/store.js

import { compose, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// import rootReducer from "./reducers";

const enhancers = compose(
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

const store = createStore(rootReducer, enhancers);

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: true, // set to `true` if dev mode, i.e. import.meta.env.DEV for vite
// });

// Read for better
// https://redux-toolkit.js.org/api/configureStore#reducer

export default store;

/**
 * THis is our state now 
 * {
  "colors": {
    "favoriteColors": []
  },
  "numbers": {
    "numbers": []
  }
}
 */
