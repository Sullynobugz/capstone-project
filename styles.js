import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 20px;
  }

  /* Mobile-first styles and media queries */
  @media screen and (min-width: 768px) {
    body {
      /* Add styles for larger screens (e.g., tablets and desktops) */
    }
  }
`;
