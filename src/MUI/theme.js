import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: [
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
  palette: {
    primary: {
      light: "#33ab9f",
      main: "#EF6B4A",
      dark: "#00695f",
      contrastText: "#fff",
      black: "#272829",
    },
    secondary: {
      light: "#6251dd",
      main: "#ff9100",
      dark: "#b26500",
      contrastText: "#fff",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: "#835C3B",
          textTransform: "lowercase",
          backgroundColor: "secondary.main",
          letterSpacing: 0.5,
          fontWeight: 500,
          fontSize: 15,
          padding: 2.5,
          margin: "0 10px 15px 0",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#835C3B",
          backgroundColor: "secondary",
          textTransform: "lowercase",
          letterSpacing: 0.5,
          fontSize: 14,
        },
      },
    },
  },
});
