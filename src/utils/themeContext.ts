import { createContext } from "react";

interface IThemeContext {
  isDark: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
