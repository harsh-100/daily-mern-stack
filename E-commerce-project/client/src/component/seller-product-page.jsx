// SellerProductsPage.js

import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { BACKEND_URL } from "../constants/routes";
import Cookies from "js-cookie";
import Header from "./header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellerProductsPage = () => {
  const [products, setProducts] = useState([]);
  const token = Cookies.get("authToken");

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch products for the logged-in seller
    (async function () {
      let products = await axios.get(`${BACKEND_URL}/product/seller`, {
        headers: {
          Authorization: token,
        },
      });

      setProducts(products.data);
    })();

    // iife->

    // fetchSellerProducts();
  }, []);

  const handleEdit = (productId) => {
    // Implement the edit functionality
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement the delete functionality
    console.log(`Delete product with ID: ${productId}`);
  };

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Seller Products
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/seller/product/add")}
          >
            Add New Product
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEdit(product._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default SellerProductsPage;
