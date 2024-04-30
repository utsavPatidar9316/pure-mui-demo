"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Table from "./component/Table";
import Table1 from "./component/Table1";
import Table2 from "./component/Table2";
import { useDarkMode } from "./context/Darkmode";
// import { theme } from "./utils/theme";
import { Box, Typography, Button } from "@mui/material";
import { DrawerHeader, Main } from "./component/styledComponent";
import { useTheme } from "@mui/material/styles";

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        color: theme.palette.text.primary,
      }}
    >
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main open={open} sx={{ minHeight: "100vh" }}>
        <DrawerHeader />
        <Box
          sx={{
            backgroundColor: "#624bff",
            height: "10rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "40px 20px 0px 20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: darkMode ? "black" : "white", fontWeight: "bold" }}
            >
              Projects
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                boxShadow: "none",
                textTransform: "none",
                fontWeight: "normal",
                "&:hover": {
                  // Remove hover effect styles
                  backgroundColor: "gray",
                },
                "&:active": {
                  // Remove onclick effect styles
                  backgroundColor: "inherit",
                },
                fontSize: "1rem",
              }}
            >
              Create New Project
            </Button>
          </Box>
          <Box sx={{ paddingTop: ".5rem" }}>
            <Cards />
          </Box>
          <Table />
          {/* <Box
            sx={{
              padding: "0 20px 20px 20px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Table1 />
            <Table2 />
          </Box>  */}
        </Box>
      </Main>
    </Box>
  );
}
