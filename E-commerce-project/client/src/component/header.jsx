import { ADMIN_ROLE, SELLER_ROLE } from "../constants/userRoles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme";
import secureLocalStorage from "react-secure-storage";
import { useSelector } from "react-redux";

// import { ThemeContext } from "../Theme";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const productsInCart = useSelector((state) => state.cart.products);
  let countOfProduct = productsInCart.length;
  console.log("🚀 ~ Header ~ countOfProduct:", countOfProduct);

  const userRole = secureLocalStorage.getItem("userRole");
  console.log("🚀 ~ Header ~ userRole:", userRole);
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Link to={"/"} > */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            My E-Commerce App
          </Link>
        </Typography>
        {/* </Link> */}

        {userRole == SELLER_ROLE && (
          <>
            {" "}
            <Button color="inherit" component={Link} to="/seller/product">
              Products
            </Button>
          </>
        )}

        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>

        <Badge badgeContent={countOfProduct} color="error">
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Badge>

        {userRole == ADMIN_ROLE && (
          <>
            <Button color="inherit" component={Link} to="/all-user">
              All users
            </Button>
          </>
        )}

        <IconButton color="inherit" onClick={toggleTheme} edge="end">
          {<Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
