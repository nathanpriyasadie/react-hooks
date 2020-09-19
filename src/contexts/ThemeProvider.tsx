import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as JSSProvider } from "react-jss";
import { darkTheme, lightTheme } from "../utils";

export type Theme = "light" | "dark";

interface ThemeContext {
  toggleTheme: () => void;
}

export const ThemeContext = createContext({
  toggleTheme: () => {},
} as ThemeContext);
export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || "light";
    setTheme(localTheme as Theme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <JSSProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </JSSProvider>
  );
};
