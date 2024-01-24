import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "./component/header";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchProductsData = async () => {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`);
      console.log(res.data);
    };
    fetchProductsData();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
