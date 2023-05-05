import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #2c2c2c; /* Hintergrundfarbe ändern */
  }

  body {
    font-family: system-ui;
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
