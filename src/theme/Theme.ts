import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FFFFFF',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1536,
      },
    },
  });
  