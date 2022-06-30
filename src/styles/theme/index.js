import { createTheme } from "@mui/material";
import { lighten } from "polished";

export const Colors = {
  primary: "#1976d2",
  secondary: "#9c27b0",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        disableElevation: false,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.primary,
          color: Colors.white,
          borderRadius: " 0 50px 0 0",
          borderRight: `0.5px solid ${Colors.white}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.white),
        },
      },
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.5, Colors.primary),
          },
        },
        secondary: {
          background: Colors.secondary,
          "&:hover": {
            background: lighten(0.5, Colors.secondary),
          },
        },
      },
    },
  },
});

export default theme;
