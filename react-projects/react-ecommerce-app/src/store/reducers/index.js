import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import userReducer from "./userReducers";

// import { userReducer } from "./userReducer";

// import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
  cart: productsReducer,
  user: userReducer,
});

export default rootReducer;
