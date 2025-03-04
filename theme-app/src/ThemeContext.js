import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Load theme from localStorage
  });

  useEffect(() => {
    localStorage.setItem("theme", theme); // Save theme to localStorage
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
