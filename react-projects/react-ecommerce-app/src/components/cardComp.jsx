import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function CardComponent({ product }) {
  console.log(product, "cards");
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
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Link>

      <CardActions>
        <Button size="small">${product.price}</Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
