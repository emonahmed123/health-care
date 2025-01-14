import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: 10,
      //     textTransform: "none",
      //   },

      defaultProps: {
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "xl" },
    },
  },

  typography: {
    body1: {
      color: "#001134CC",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
