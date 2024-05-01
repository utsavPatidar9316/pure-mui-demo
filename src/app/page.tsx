"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Table from "./component/Table";
import Table1 from "./component/Table1";
import Table2 from "./component/Table2";
import StickyHeadTable from './component/TaskTable'
import { useDarkMode } from "./context/Darkmode";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  // Add additional styles for smaller screens (600px or below)
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    marginLeft: 0,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

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
                  // backgroundColor: "gray",
                },
                "&:active": {
                  // Remove onclick effect styles
                  // backgroundColor: "inherit",
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


          <Grid container spacing={2} padding={2}>
            <Grid item sm={6}>
              <StickyHeadTable />

            </Grid>
            <Grid item sm={6}>
              <StickyHeadTable />

            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
}
