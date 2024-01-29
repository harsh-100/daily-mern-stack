// SellerAddProductPage.js

import * as yup from "yup";

import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { BACKEND_URL } from "../constants/routes";
import Cookies from "js-cookie";
import Header from "./header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Product Name is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .required("Price is required")
    .min(5, "Value must be greater than 5"),
  // .positive("Price must be positive"),
  stock: yup
    .number()
    .required("Stock is required")
    .integer("Stock must be an integer")
    .positive("Stock must be positive"),

  category: yup.string().required("Category is required"),
  color: yup.string().required("Color is required"),
  size: yup.string().required("Size is required"),
  // image: yup.mixed().required("Image is required"),
});

const SellerAddProductPage = ({ history }) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   setValue("name", "harsh");
  //   setValue("description", "description");
  // }, []);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("The eroro", errors);
  const onSubmit = async (data) => {
    try {
      const token = Cookies.get("authToken");
      console.log("the data>>>", data);
      // const formData = new FormData();

      // formData.append("name", data.name);
      // formData.append("description", data.description);
      // formData.append("price", data.price);
      // formData.append("stock", data.stock);
      // formData.append("category", data.category);
      // formData.append("color", data.color);
      // formData.append("size", data.size);
      // formData.append("image", data.image[0]);

      const dataObj = {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category: data.category,
        color: data.color,
        size: data.size,
      };

      // const newObj = { data: JSON.stringify(dataObj) };
      let response = await axios.post(
        `${BACKEND_URL}/product`,
        { data: dataObj },
        {
          headers: {
            Authorization: token,
            // "content-type": "multipart/form-data",
          },
        }
      );

      if (response.status == 200) {
        toast.success(response.data.message, {
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/seller/product");
        }, 1000);
      } else {
        toast.error("Not worked", {
          position: "top-right",
        });
      }

      console.log("The response ", response);

      //   await axios.post("/api/seller/products/add", formData); // Replace with your actual API endpoint

      // add multipart form data in axios
      // Redirect to the seller products page after successful addition
      //   history.push("/seller/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Typography variant="h5" gutterBottom>
          Add a New Product
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Product Name */}
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Product Name"
                    variant="outlined"
                    {...field}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    {...field}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                )}
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="price"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    type="number"
                    {...field}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                  />
                )}
              />
            </Grid>

            {/* Stock */}
            <Grid item xs={12} sm={6}>
              <Controller
                name="stock"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Stock"
                    variant="outlined"
                    type="number"
                    {...field}
                    error={!!errors.stock}
                    helperText={errors.stock?.message}
                  />
                )}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12}>
              <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Category"
                    variant="outlined"
                    {...field}
                    error={errors.category}
                    helperText={errors.category?.message}
                  />
                )}
              />
            </Grid>

            {/* Color */}
            <Grid item xs={12}>
              <Controller
                name="color"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Color"
                    variant="outlined"
                    {...field}
                    error={!!errors.color}
                    helperText={errors.color?.message}
                  />
                )}
              />
            </Grid>

            {/* Size */}
            <Grid item xs={12}>
              <Controller
                name="size"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Size"
                    variant="outlined"
                    {...field}
                    error={!!errors.size}
                    helperText={errors.size?.message}
                  />
                )}
              />
            </Grid>

            {/* Image */}
            <Grid item xs={12}>
              <Controller
                name="image"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    type="file"
                    label="Image"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    {...field}
                    error={!!errors.image}
                    helperText={errors.image?.message}
                  />
                )}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
        <Toaster />
      </Container>
    </>
  );
};

export default SellerAddProductPage;
