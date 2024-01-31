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
import { Toaster, toast } from "react-hot-toast";

import { BACKEND_URL } from "../constants/routes";
import Cookies from "js-cookie";
import Header from "./header";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

const SellerProductsPage = () => {
  const [products, setProducts] = useState([]);
  const token = Cookies.get("authToken");

  const navigate = useNavigate();

  async function fetchProductsData() {
    let products = await axios.get(`${BACKEND_URL}/product/seller`, {
      headers: {
        Authorization: token,
      },
    });

    setProducts(products.data);
  }
  useEffect(() => {
    // Fetch products for the logged-in seller
    fetchProductsData();

    // iife->

    // fetchSellerProducts();
  }, []);

  const handleEdit = (productId) => {
    // Implement the edit functionality
    console.log(`Edit product with ID: ${productId}`);

    navigate(`/seller/product/edit/${productId}`);
  };

  const handleDelete = async (productId) => {
    if (confirm("Are you sure you want to proceed?")) {
      // user clicked OK
      console.log(`Delete product with ID: ${productId}`);

      let response = await axios.delete(`${BACKEND_URL}/product/${productId}`);

      if (response.status == 200) {
        toast.success("Deleted Successfully", {
          position: "top-right",
        });
        fetchProductsData();
      }
    } else {
      // user clicked Cancel

      console.log("ok");
    }
    // Implement the delete functionality

    console.log(response);
  };

  const userRole = secureLocalStorage.getItem("userRole");
  console.log("🚀 ~ SellerProductsPage ~ userRole:", userRole);

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
        <Toaster />
      </Container>
    </>
  );
};

export default SellerProductsPage;
