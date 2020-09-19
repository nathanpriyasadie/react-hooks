import React from "react";
import { ThemeProvider } from "react-jss";
import { HomePage } from "./pages";
import { TaskProvider } from "./contexts";
import { theme } from "./utils";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <HomePage />
      </TaskProvider>
    </ThemeProvider>
  );
}
