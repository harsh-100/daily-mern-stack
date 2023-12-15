// src/colorReducer.js
const initialState = {
  favoriteColors: [],
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return {
        ...state,
        favoriteColors: [...state.favoriteColors, action.payload],
      };
    case "REMOVE_COLOR":
      return {
        ...state,
        favoriteColors: state.favoriteColors.filter(
          (color) => color !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default colorReducer;
