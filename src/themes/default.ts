import { createGlobalStyle } from "styled-components";

export const themeDefault= {
    colors: {
      greenDark: "#015F43",
      green: "#00875F",
      greenLight: "#00B37E",
      redDark: "#00875F",
      red: "#F03847",
      gray1: "#121214",
      gray2: "#202024",
      gray3: "#323238",
      gray4: "#7C7C8A",
      gray5: "#8D8D99",
      gray6: "#C4C4CC",
      gray7: "#E1E1E6",
      white: "#FFFFFF",
    },
  };

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    body {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    }
    input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    }
`;
  