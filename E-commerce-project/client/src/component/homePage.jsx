import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import ProductList from "./productList";
import axios from "axios";

// import { Box } from "@mui/material";
// import CardComponent from "./cardComp";
// import Navbar from "./navbar";

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);
  //   let result = [];
  const getProductsData = async () => {
    let token = Cookies.get("authToken");
    console.log("🚀 ~ getProductsData ~ token:", token);
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`, {
      headers: {
        Authorization: token,
      },
    });

    // const result = await res.json();
    setProductsData(res.data);
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
