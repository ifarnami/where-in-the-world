import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";

interface IThemeProviderProps extends PropsWithChildren {}

const ThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
}): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((ID) => !ID);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
