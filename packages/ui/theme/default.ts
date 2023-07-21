import { type ButtonProps, ThemeOptions } from "@mui/material";

const buttonDefaultProps: ButtonProps = {
  variant: "contained",
  color: "primary",
  disableElevation: true,
};

export const defaultTheme: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: buttonDefaultProps,
    },
    // @ts-ignore
    MuiLoadingButton: {
      defaultProps: buttonDefaultProps,
    },
  },
  typography: {
    fontFamily: "inherit",
    button: {
      fontSize: "1rem",
      textTransform: "none",
    },
  },
};
