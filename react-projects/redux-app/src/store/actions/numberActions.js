export const addNumber = (number) => ({
  type: "ADD_NUMBER",
  payload: number,
});

export const removeNumber = (number) => ({
  type: "REMOVE_NUMBER",
  payload: number,
});
