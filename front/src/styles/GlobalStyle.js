import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
    }
    html, body {
        /* font-size: 62.5%; */
        /* background-color: #222222; */
        font-family: "Elice Digital Baeum", sans-serif;
    }
    ul {
        list-style: none;
        margin: 0;
    }
${({ theme }) => {
  return css`
    h1 {
      font-size: ${theme.fontSize.extraLarge};
    }
    h2 {
      font-size: ${theme.fontSize.large};
    }
    h3 {
      font-size: ${theme.fontSize.medium};
    }
    h4 {
      font-size: ${theme.fontSize.small};
    }
  `;
}}
`;

export default GlobalStyle;
