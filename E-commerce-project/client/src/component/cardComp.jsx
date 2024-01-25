import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// import { Link } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";

// import { setProducts } from "../store/actions/productsActions";

export default function CardComponent({ product }) {
  // const dispatch = useDispatch();
  // const productsInCart = useSelector((state) => state.cart.products);

  function isItemInCart() {
    return false;
    // return productsInCart.some((oneObj) => oneObj.id == product.id);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      > */}
      <CardMedia
        sx={{ height: 140 }}
        // image={product.imageUrl}
        image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
        title={product.name}
        style={{ backgroundSize: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name.split(" ").slice(0, 4).join(" ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {product.description} */}
          {product.description.split(" ").slice(0, 10).join(" ")}
        </Typography>
      </CardContent>
      {/* </Link> */}

      <CardActions>
        <Button size="small">${product.price}</Button>

        {isItemInCart() ? (
          <Button size="small" disabled>
            Already Added
          </Button>
        ) : (
          <Button size="small">Add To Cart</Button>
        )}
      </CardActions>
    </Card>
  );
}
