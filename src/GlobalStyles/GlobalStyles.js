import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        font-family: 'Roboto Mono', monospace;
        background-color: black;
    }
    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    input, select {
        height: 30px;
        border-radius: 6px;
        border: 1px solid #e5e5ff;
        background-color: white;
    }
    
`;

export default GlobalStyle;
