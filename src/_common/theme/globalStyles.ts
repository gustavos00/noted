import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Poppins';
    }
`;

export default GlobalStyles;
