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
