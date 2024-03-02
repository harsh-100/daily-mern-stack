// actions/productsActions.js

// useDispatch

export const ProductActionKeys = {
  SET_PRODUCT: "SET_PRODUCT",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};
export const setProducts = (products) => ({
  type: ProductActionKeys.SET_PRODUCT,
  payload: products,
});

// export const setLoading = () => ({
//   type: "SET_LOADING",
// });

// export const setError = (error) => ({
//   type: "SET_ERROR",
//   payload: error,
// });

export const removeFromCart = (productId) => ({
  type: ProductActionKeys.REMOVE_FROM_CART,
  payload: productId,
});

export const increaseQuantity = (productId) => ({
  type: ProductActionKeys.INCREASE_QUANTITY,
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: ProductActionKeys.DECREASE_QUANTITY,
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
