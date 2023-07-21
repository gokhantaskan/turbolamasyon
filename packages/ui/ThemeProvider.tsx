"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { ReactNode, useMemo } from "react";
import { defaultTheme, lightTheme, darkTheme } from "./theme";

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
