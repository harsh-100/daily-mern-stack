import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DemoComponent from "./components/demo";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import Navbar from "./components/navbar";
import ProductPage from "./components/productPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />

            {/* put this route at the bottom  */}
            <Route path="/*" element={<DemoComponent />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
