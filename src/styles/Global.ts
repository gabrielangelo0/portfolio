import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Merriweather Sans', sans-serif;
        list-style: none;
    }
    :root {
        --body-bg-color: #22212C;
        --text-color: #837E9F;
        --bg-cards: #302F3D;
        --bg-techs: #CB92B1;
    }
    body {
        background: var(--body-bg-color);
        color: var(--text-color);
    }
   
`;