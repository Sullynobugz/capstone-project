import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 20px;
  }

  /* Mobile-First-Styles */
  .nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }

  .nav__item {
    margin-right: 10px;
  }

  /* Tablet-Styles */
  @media (min-width: 768px) {
    .nav {
      display: flex;
      justify-content: space-between;
    }

    .nav__item {
      margin-right: 0;
      margin-left: 10px;
    }
  }

  /* Desktop-Styles */
  @media (min-width: 1200px) {
    .nav__item {
      font-size: 1.2em;
    }
  }
`;


export default GlobalStyle;
