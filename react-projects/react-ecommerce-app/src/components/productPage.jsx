// import * as React from "react";

// import Avatar from "@mui/material/Avatar";
// import { Box } from "@mui/material";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import Collapse from "@mui/material/Collapse";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ShareIcon from "@mui/icons-material/Share";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import { styled } from "@mui/material/styles";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ProductPage() {
//   const [expanded, setExpanded] = React.useState(false);

//   const [productData, setProductData] = React.useState();

//   const { productId } = useParams();
//   //   console.log("Params ", params);

//   const getParticularProductData = async () => {
//     let response = await fetch(
//       `https://fakestoreapi.com/products/${productId}`
//     );

//     let result = await response.json();

//     setProductData(result);
//     console.log("Resule data", result);
//   };

//   useEffect(() => {
//     getParticularProductData();
//   }, []);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   if (!productData) {
//     return <>Loading ...</>;
//   }

//   return (
//     // <div>
//     <Box m={13} sx={{ display: "flex", justifyContent: "center" }}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               {productData.title[0]}
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={productData.title}
//           subheader={productData.category}
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image={productData.image}
//           //   style={{ backgroundSize: "contain" }}
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {productData.description}
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             <Typography paragraph>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron
//               and set aside for 10 minutes.
//             </Typography>
//             <Typography paragraph>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//               over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//               stirring occasionally until lightly browned, 6 to 8 minutes.
//               Transfer shrimp to a large plate and set aside, leaving chicken
//               and chorizo in the pan. Add pimentón, bay leaves, garlic,
//               tomatoes, onion, salt and pepper, and cook, stirring often until
//               thickened and fragrant, about 10 minutes. Add saffron broth and
//               remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
//             <Typography paragraph>
//               Add rice and stir very gently to distribute. Top with artichokes
//               and peppers, and cook without stirring, until most of the liquid
//               is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
//               reserved shrimp and mussels, tucking them down into the rice, and
//               cook again without stirring, until mussels have opened and rice is
//               just tender, 5 to 7 minutes more. (Discard any mussels that
//               don&apos;t open.)
//             </Typography>
//             <Typography>
//               Set aside off of the heat to let rest for 10 minutes, and then
//               serve.
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     </Box>
//     // </div>
//   );
// }

// ProductPage.js

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [productData, setProductData] = React.useState();

  const { productId } = useParams();
  //   console.log("Params ", params);

  const getParticularProductData = async () => {
    let response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );

    let result = await response.json();

    setProductData(result);
    console.log("Resule data", result);
  };

  useEffect(() => {
    getParticularProductData();
  }, []);

  // Dummy product data
  const product = {
    id: productId,
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
  };

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${product.name} to the cart`);
  };

  if (!productData) {
    return <>Loading ...</>;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardMedia
            component="img"
            style={{ objectFit: "contain" }}
            alt={productData.title}
            height="200"
            image={productData.image}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {productData.title}
            </Typography>
            <Typography color="text.secondary">
              {productData.description}
            </Typography>
            <Typography variant="h6" color="primary">
              ${productData.price.toFixed(2)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            {/* Add other buttons or actions here */}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
