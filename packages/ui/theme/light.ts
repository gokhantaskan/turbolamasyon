import { ThemeOptions } from "@mui/material";
import appconfig from "appconfig";

const { colors } = appconfig.theme;

export const lightTheme = <ThemeOptions>{
  palette: {
    mode: "light",
    primary: {
      main: colors.purple.DEFAULT,
    },
  },
};
