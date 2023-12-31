import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import CardComponent from "./cardComp";
import Navbar from "./navbar";
import ProductList from "./productList";

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);
  //   let result = [];
  const getProductsData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const result = await res.json();
    setProductsData(result);
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <ProductList productsData={productsData} />
    </>
  );
};

export default HomePage;
