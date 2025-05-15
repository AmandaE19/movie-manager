import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  theme: typeof lightTheme;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: { children: any }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme: isDark ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
