import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/about";
import Box from "./components/box";
import Contact from "./components/contact";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import ParentComp from "./components/parentComp";

// import logo from './logo.svg';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Box />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/props" element={<ParentComp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
