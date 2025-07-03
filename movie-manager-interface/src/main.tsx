import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { ThemeContextProvider, useTheme } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext"

const AppWhithProviders = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppWhithProviders />
    </ThemeContextProvider>
  </React.StrictMode>,
)
