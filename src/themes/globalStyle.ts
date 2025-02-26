import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px  ${({ theme }) => theme.colors.green};
    }
    body {
        background: ${({ theme }) => theme.colors.gray2};
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        width: 100%;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea, select, button {
        font-family: inherit;
        font-size: inherit;
    }
`
