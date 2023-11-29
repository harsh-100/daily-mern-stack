import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div style={navbarStyle}>
        <div style={titleStyle}>WazirX</div>
        <div style={menuContainerStyle}>
          <Link to="/about">
            {" "}
            <div style={menuItemStyle}>About </div>
          </Link>

          <Link to="/contact">
            <div style={menuItemStyle}>Contact</div>
          </Link>
          {/* <div style={menuItemStyle}></div> */}
        </div>
      </div>
    </>
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
export default NavbarComponent;
