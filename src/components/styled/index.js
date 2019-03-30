import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
       
    }

    input, button, a {
      border: 0;
      
      &:focus {
        outline: 0;
      }
    }

    * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
    }
`;
