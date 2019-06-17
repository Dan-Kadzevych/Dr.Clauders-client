import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');
    
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }
`;

export default GlobalStyles;
