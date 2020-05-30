import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body #root {
    min-height: 100%;
  }

  body {
    background: #ede4e2;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #ede4e2;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;