import { ADMIN_ROLE, SELLER_ROLE } from "../constants/userRoles";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme";
import secureLocalStorage from "react-secure-storage";

// import { ThemeContext } from "../Theme";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  //   console.log("🚀 ~ Header ~ isDarkMode:", isDarkMode);

  const userRole = secureLocalStorage.getItem("userRole");
  console.log("🚀 ~ Header ~ userRole:", userRole);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My E-Commerce App
        </Typography>

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
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>

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
