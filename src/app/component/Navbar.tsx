import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import { useDarkMode } from "../context/Darkmode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
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
        backgroundColor: theme?.palette?.background?.default,
        color: theme?.palette?.text?.primary,
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          </div>
        )}
        <div
          style={{
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
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
