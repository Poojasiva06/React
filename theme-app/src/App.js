import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext.js";
import "./App.css";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Current Theme: {theme.toUpperCase()}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
