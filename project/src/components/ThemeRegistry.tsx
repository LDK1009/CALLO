"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiTheme from "@/styles/MuiTheme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
