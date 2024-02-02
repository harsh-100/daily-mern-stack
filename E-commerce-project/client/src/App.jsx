import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import AddNewProduct from "./component/addNewProduct";
import Header from "./component/header";
import HomePage from "./component/homePage";
import LearnHOC from "./component/learnHoc";
import LearningHoc from "./learning-hoc";
import LoginPage from "./component/loginPage";
import PrivateRouteComponent from "./component/privateRoute";
import RegisterForm from "./component/registerForm";
import { SELLER_ROLE } from "./constants/userRoles";
import SellerProductPage from "./component/seller-product-page";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

// NotFound.js

// import React from "react";
// import "./NotFound.css"; // Import your CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for might be in another castle.</p>
      <img
        src="https://i.imgur.com/qIufhof.png" // You can replace this with your own image URL
        alt="Mario 404"
        className="not-found-image"
      />
    </div>
  );
};

function App() {
  // useEffect(() => {
  //   const fetchProductsData = async () => {
  //     let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`);
  //     console.log(res.data);
  //   };
  //   fetchProductsData();
  // }, []);

  const userRole = secureLocalStorage.getItem("userRole");
  return (
    <>
      {/* <Header /> */}

      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterForm />} path="/register" />

          <Route element={<LearningHoc />} path="/learning" />

          <Route
            element={
              <PrivateRouteComponent userConditon={userRole == SELLER_ROLE} />
            }
          >
            <Route element={<SellerProductPage />} path="/seller/product" />
            <Route element={<AddNewProduct />} path="/seller/product/add" />
            <Route
              element={<AddNewProduct />}
              path="/seller/product/edit/:productId"
            />
          </Route>

          <Route
            path="*"
            element={
              <>
                <NotFound />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
