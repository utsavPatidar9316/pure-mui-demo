import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Image from "next/image";
import { useSmallScreen } from "../context/smallScreeen";
import {
  CustomAppBar,
  Search,
  SearchIconWrapper,
  StyledBadge,
  StyledInputBase,
} from "./styledComponent";
import { useTheme } from "@mui/material/styles";

type props = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Navbar = ({ open, handleDrawerOpen }: props) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { smallScreen } = useSmallScreen();
  const theme = useTheme();

  return (
    <CustomAppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {(!smallScreen || (smallScreen && !open)) && (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <FormatAlignLeftIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            padding: "14px",
            cursor: "pointer",
          }}
        >
          {darkMode ? (
            <DarkModeIcon onClick={toggleDarkMode} />
          ) : (
            <LightModeIcon onClick={toggleDarkMode} />
          )}
          <NotificationsNoneIcon />
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="chart.svg" />
          </StyledBadge>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
