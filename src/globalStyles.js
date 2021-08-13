import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    html, body {
        overflow-x: hidden;
        padding-right: 0 !important;
        font-family: 'Poppins', sans-serif;
    }
`
export default GlobalStyle;
