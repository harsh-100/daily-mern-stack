// src/actions.js
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const updateName = (payload) => ({
  type: "UPDATE",
  payload,
});

// https://medium.com/swlh/what-is-redux-b16b42b33820
