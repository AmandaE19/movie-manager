import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      transition: all 0.3s ease;
      font-family: "Montserrat";
    }

    a {
      text-decoration: none;
      color: inherit;
    }
`;
