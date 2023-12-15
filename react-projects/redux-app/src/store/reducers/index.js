// src/reducers/index.js

import colorReducer from "./colorReducer";
import { combineReducers } from "redux";
import numberReducer from "./numberReducer";

const rootReducer = combineReducers({
  colors: colorReducer,
  numbers: numberReducer,
});

export default rootReducer;
