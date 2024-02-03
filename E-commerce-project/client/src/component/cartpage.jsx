// CartPage.js

import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

import Header from "./header";
import React from "react";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.products);
  console.log("🚀 ~ file: cartPage.jsx:23 ~ CartPage ~ cart:", cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Your Cart
            </Typography>
            {cart.length === 0 ? (
              <Typography variant="h6" align="center">
                Your cart is empty.
              </Typography>
            ) : (
              cart.map((item) => (
                <Paper
                  key={item._id}
                  elevation={3}
                  style={{ marginBottom: "16px" }}
                >
                  <Box p={2}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography color="text.secondary">
                          Product Name: {item.name}
                        </Typography>

                        <Typography color="text.secondary">
                          Price: $
                          {item.totalPrice
                            ? item.totalPrice
                            : item.price.toFixed(2)}
                        </Typography>
                        <Typography>
                          Quantity: {item.quantity ? item.quantity : 1}
                        </Typography>
                      </Box>

                      <Box>
                        {/* <img src={item.image} height={50} width={50} /> */}
                        <img
                          src={
                            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          }
                          height={50}
                          width={50}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between" p={2}>
                    <Box>
                      <IconButton
                        onClick={() => handleDecreaseQuantity(item._id)}
                      >
                        -
                      </IconButton>
                      <IconButton
                        onClick={() => handleIncreaseQuantity(item._id)}
                      >
                        +
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Paper>
              ))
            )}
            {cart.length > 0 && (
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Checkout
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CartPage;
