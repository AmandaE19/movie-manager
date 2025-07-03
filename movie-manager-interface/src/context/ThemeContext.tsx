import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import type { ThemeContextType } from "../types/global";

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: { children: any }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme: isDark ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
