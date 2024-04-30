"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import { DarkModeProvider } from "../context/Darkmode";
import MuiTheme from "./Theme";
import { SmallScreenProvider } from "../context/smallScreeen";

const index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DarkModeProvider>
      <SmallScreenProvider>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <MuiTheme>{children}</MuiTheme>
        </AppRouterCacheProvider>
      </SmallScreenProvider>
    </DarkModeProvider>
  );
};

export default index;
