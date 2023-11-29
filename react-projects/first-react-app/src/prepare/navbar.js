// Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <div style={titleStyle}>Navbar</div>
      <div style={menuContainerStyle}>
        <div style={menuItemStyle}>Menu 1</div>
        <div style={menuItemStyle}>Menu 2</div>
        <div style={menuItemStyle}>Menu 3</div>
      </div>
    </div>
  );
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
};

const titleStyle = {
  fontSize: "1.5em",
};

const menuContainerStyle = {
  display: "flex",
};

const menuItemStyle = {
  marginLeft: "10px",
  cursor: "pointer",
};

export default Navbar;
