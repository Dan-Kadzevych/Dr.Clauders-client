import { createGlobalStyle } from 'styled-components';

import { color_primary, color_white } from './variables';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    
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
    
    .mt-md {
        margin-top: 3rem;
    }
    
    .mb-sm {
        margin-bottom: 2rem;
    }
    
    .mb-md {
        margin-bottom: 3rem;
    }
    
    .mb-md-b {
        margin-bottom: 4rem;
    }
    
    ::selection {
    background-color: ${color_primary};
    color: ${color_white};
}
`;

export default GlobalStyles;
