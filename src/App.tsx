import React from "react";
import { HomePage } from "./pages";
import { TaskProvider, ThemeProvider } from "./contexts";

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <HomePage />
      </TaskProvider>
    </ThemeProvider>
  );
}
