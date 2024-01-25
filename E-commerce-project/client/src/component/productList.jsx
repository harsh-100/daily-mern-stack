import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import CardComponent from "./cardComp";

const ProductList = ({ productsData }) => {
  return (
    <>
      <Box
        m={2}
        pt={2}
        // bgcolor={"red"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {productsData &&
          productsData.map((product) => <CardComponent product={product} />)}
      </Box>
    </>
  );
};

export default ProductList;
