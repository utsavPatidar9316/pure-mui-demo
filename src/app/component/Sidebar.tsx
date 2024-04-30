"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import { sidebarData } from "../utils/sidebarData";
import { useDarkMode } from "../context/Darkmode";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import { useSmallScreen } from "../context/smallScreeen";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { drawerWidth } from "./styledComponent";

type props = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Sidebar = ({ open, handleDrawerOpen }: props) => {
  const { darkMode } = useDarkMode();
  const { smallScreen } = useSmallScreen();
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: theme.palette.text.primary,
          bgcolor: theme.palette.background.default,
        },
      }}
      variant={smallScreen ? "temporary" : "persistent"}
      anchor="left"
      open={open}
    >
      <Box
        sx={{
          padding: "1rem 1.5rem 1.5rem",
          display: "flex",
          marginRight: 0,
          filter: darkMode ? "brightness(0) invert(1)" : "",
          gap: theme.spacing(10),
        }}
      >
        <img
          src="com-logo.svg"
          alt="Example SVG"
          style={{ height: "1.875rem" }}
        />
        <Typography
          component="span"
          sx={{
            cursor: "pointer",
          }}
        >
          {smallScreen && <FirstPageRoundedIcon onClick={handleDrawerOpen} />}
        </Typography>
      </Box>
      <List>
        {sidebarData.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: "30px",
                  filter: darkMode ? "brightness(0) invert(1)" : "",
                }}
              >
                <DashboardCustomizeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
