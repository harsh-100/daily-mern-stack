import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../theme";

// import { ThemeContext } from "../Theme";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  //   console.log("🚀 ~ Header ~ isDarkMode:", isDarkMode);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My E-Commerce App
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme} edge="end">
          {<Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
