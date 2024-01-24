import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976D2",
      },
      secondary: {
        main: "#FF4081",
      },
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderWrapper as ThemeProvider, ThemeContext };
