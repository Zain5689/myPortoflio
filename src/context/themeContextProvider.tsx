import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const themeSwitchHandler = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeSwitchHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
