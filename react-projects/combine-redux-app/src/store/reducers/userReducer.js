const initialState = {
  name: "Joker",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATENAME":
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
