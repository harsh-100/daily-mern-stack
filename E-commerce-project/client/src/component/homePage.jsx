import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import Header from "./header";
import ProductList from "./productList";
import SellerAddProductPage from "./my-comp/addProduct";
import axios from "axios";

// import { Box } from "@mui/material";
// import CardComponent from "./cardComp";
// import Navbar from "./navbar";

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);
  //   let result = [];
  const getProductsData = async () => {
    let token = Cookies.get("authToken");
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`, {
      // headers: {
      //   Authorization: token,
      // },
    });

    // const result = await res.json();
    setProductsData(res.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <Header />
      {/* <header></header> */}
      <ProductList productsData={productsData} />
    </>
  );
};

export default HomePage;
