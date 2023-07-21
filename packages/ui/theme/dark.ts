import { ThemeOptions } from "@mui/material";
import appconfig from "appconfig";

const { colors } = appconfig.theme;

export const darkTheme = <ThemeOptions>{
  palette: {
    mode: "dark",
    primary: {
      main: colors.purple[600],
    },
  },
};
