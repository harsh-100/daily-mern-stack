// src/numberReducer.js
const initialState = {
  numbers: [],
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case "REMOVE_NUMBER":
      return {
        ...state,
        numbers: state.numbers.filter((number) => number !== action.payload),
      };
    default:
      return state;
  }
};

export default numberReducer;
