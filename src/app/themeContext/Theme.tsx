import React from "react";
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
  };
  text: PaletteOptions["text"];
  divider: string;
  mode?: "light" | "dark";
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Muitheme = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { darkMode } = useDarkMode();

  // Define separate objects for light mode and dark mode palettes
  const lightModePalette: CustomPaletteOptions = {
    primary: {
      main: "#624bff",
    },
    background: {
      default: "#ffffff", // White background for light mode
      themeBG: "#f1f5f9",
    },
    text: {
      primary: "#000000", // Black text color for light mode
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
      themeBG: "#0f172a",
    },
    text: {
      primary: "#ffffff", // White text color for dark mode
    },
    divider: "#000000",
    mode: "dark",
  };

  // Select the appropriate palette based on darkMode
  const palette = darkMode ? darkModePalette : lightModePalette;

  const theme: ThemeOptions = createTheme({
    palette,
    typography: {
      fontFamily: "Roboto", // Assuming roboto is defined elsewhere
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Muitheme;
