import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100vw;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
