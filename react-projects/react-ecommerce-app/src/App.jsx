import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DemoComponent from "./components/demo";
import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import ProductPage from "./components/productPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          {/* put this route at the bottom  */}
          <Route path="/*" element={<DemoComponent />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
