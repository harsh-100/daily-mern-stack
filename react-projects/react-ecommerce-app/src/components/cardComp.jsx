import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { setProducts } from "../store/actions/productsActions";

export default function CardComponent({ product }) {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);

  function isItemInCart() {
    return productsInCart.some((oneObj) => oneObj.id == product.id);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={product.image}
          title="green iguana"
          style={{ backgroundSize: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.split(" ").slice(0, 4).join(" ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {product.description} */}
            {product.description.split(" ").slice(0, 10).join(" ")}
          </Typography>
        </CardContent>
      </Link>

      <CardActions>
        <Button size="small">${product.price}</Button>

        {isItemInCart() ? (
          <Button size="small" disabled>
            Already Added
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(setProducts(product))}>
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
