import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme should be used with ThemeContext");
  } else {
    return context;
  }
};

export default useTheme;
