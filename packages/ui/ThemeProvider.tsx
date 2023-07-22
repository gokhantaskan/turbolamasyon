"use client";

import { createTheme, CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { ReactNode, useMemo } from "react";

import { darkTheme, defaultTheme, lightTheme } from "./theme";

export const ThemeProvider = ({
  colorMode,
  children,
}: {
  colorMode?: string;
  children: ReactNode;
}) => {
  const theme = useMemo(() => {
    console.log("mode", colorMode);

    return createTheme(
      deepmerge(defaultTheme, colorMode === "light" ? lightTheme : darkTheme),
    );
  }, [colorMode]);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
};
