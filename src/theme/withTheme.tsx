import React from "react";
import { ThemeProvider } from "styled-components/native";
import Theme from ".";

const withTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={Theme}>{component}</ThemeProvider>
);

export { withTheme };
