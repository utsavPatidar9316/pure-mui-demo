import React, { useEffect } from "react";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { useDarkMode } from "../context/Darkmode";
import { ThemeProvider } from "@emotion/react";
import { ThemeOptions, PaletteOptions } from "@mui/material";

export interface CustomPaletteOptions {
  primary: PaletteOptions["primary"];
  background: {
    default: string;
    themeBG: string;
    bodyBG: string;
  };
  text: PaletteOptions["text"];
  divider: string;
  mode?: "light" | "dark";
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPaletteOptions {}
  interface TypeBackground {
    bodyBG: string;
    themeBG: string;
  }
}

const Muitheme = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f1f5f9";
  }, [darkMode]);

  // Define separate objects for light mode and dark mode palettes
  const lightModePalette: CustomPaletteOptions = {
    primary: {
      main: "#624bff",
    },
    background: {
      default: "#ffffff", // White background for light mode
      themeBG: "#f1f5f9",
      bodyBG: "#f1f5f9",
    },
    text: {
      primary: "#1e293b", // Black text color for light mode
      // secondary:"#1e293b"
    },
    divider: "#ffffff",
    mode: "light",
  };

  const darkModePalette: CustomPaletteOptions = {
    primary: {
      main: "#624bff",
    },
    background: {
      default: "#1e293b", // Dark background for dark mode
      themeBG: "#1e293b",
      bodyBG: "#0f172a",
    },
    text: {
      primary: "#ffffff",
      // secondary:"#ffffff" // White text color for dark mode
    },
    divider: "#1e293b",
    mode: "dark",
  };

  // Select the appropriate palette based on darkMode
  const palette = darkMode ? darkModePalette : lightModePalette;

  const theme: ThemeOptions = createTheme({
    palette,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Muitheme;
