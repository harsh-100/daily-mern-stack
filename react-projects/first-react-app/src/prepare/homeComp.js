// HomePage.js

import Navbar from "./navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        {/* Your cards or other content here */}
        <h2>Main Home Page Content</h2>
        <p>Card 1</p>
        <p>Card 2</p>
        <p>Card 3</p>
      </div>
    </div>
  );
};

export default HomePage;
