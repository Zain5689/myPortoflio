import { createContext } from "react";

export interface IThemeContext {
  theme: "dark" | "light";
  themeSwitchHandler: (theme: "dark" | "light") => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  themeSwitchHandler: () => {},
});
