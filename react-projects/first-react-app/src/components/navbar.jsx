import { Link } from "react-router-dom";

const NavbarComponent = ({ children }) => {
  return (
    <>
      <div style={navbarStyle}>
        <Link to={"/"} style={linkStyle}>
          <div style={titleStyle}>Small Comps 🚀</div>
        </Link>

        <div style={menuContainerStyle}>
          <Link to="/todo" style={linkStyle}>
            {" "}
            <div style={menuItemStyle}>To Do </div>
          </Link>

          <Link to="/about" style={linkStyle}>
            {" "}
            <div style={menuItemStyle}>About </div>
          </Link>

          <Link to="/contact" style={linkStyle}>
            <div style={menuItemStyle}>Contact</div>
          </Link>

          <Link to="/counter" style={linkStyle}>
            <div style={menuItemStyle}>Counter</div>
          </Link>

          <Link to="/mui-learn" style={linkStyle}>
            <div style={menuItemStyle}>MuiComponent</div>
          </Link>

          {children}
          {/* <div style={menuItemStyle}></div> */}
        </div>
      </div>
    </>
  );
};

const linkStyle = { textDecoration: "none", color: "inherit" };
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
