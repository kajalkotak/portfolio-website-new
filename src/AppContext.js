//AppContext.js

import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Provider Component
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "Kajal Kotak" });

  // function to toggle theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, user }}>
      {children}
    </AppContext.Provider>
  );
};
