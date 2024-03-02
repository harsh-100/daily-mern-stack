// actions/productsActions.js

export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const increaseQuantity = (productId) => ({
  type: "INCREASE_QUANTITY",
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: "DECREASE_QUANTITY",
  payload: productId,
});
// export const fetchProducts = () => async (dispatch) => {
//   try {
//     dispatch(setLoading());
//     const response = await fetch("/api/products"); // Replace with your API endpoint
//     const data = await response.json();
//     dispatch(setProducts(data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };
