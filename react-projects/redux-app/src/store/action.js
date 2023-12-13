export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const updateName = ({ payload }) => {
  return {
    type: "UPDATENAME",
    payload,
  };
};
