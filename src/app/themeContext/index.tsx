"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import { DarkModeProvider } from "../context/Darkmode";
import MuiTheme from "./Theme";

const index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DarkModeProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <MuiTheme>{children}</MuiTheme>
      </AppRouterCacheProvider>
    </DarkModeProvider>
  );
};

export default index;
