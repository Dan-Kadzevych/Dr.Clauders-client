import { createGlobalStyle } from 'styled-components';

import {
    color_primary,
    color_secondary,
    color_tertiary,
    color_white,
    color_black,
    color_grey_dark_2,
    font_primary
} from './variables';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:300,300i,400,400i,700,700i,800,800i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        ${font_primary};
        font-size: 1.5rem;
        box-sizing: border-box;
        line-height: 2.7rem;
        font-weight: 400;
        color: ${color_grey_dark_2};
    }
    
    
    html {
        font-size: 62.5%;
    }
    
    ul {
        list-style-type: none;
    }
    
    .d-none {
       display: none;
    }
    
    .ml-sm-s {
    margin-left: 1.5rem;
    }
    
    .mt-sm-s {
        margin-top: 1.5rem;
    }
    
    .mt-md {
        margin-top: 3rem;
    }
    
    .mb-sm {
        margin-bottom: 2rem;
    }
    
    .mb-sm-s {
        margin-bottom: 1.5rem;
    }
    
    
    .mb-md {
        margin-bottom: 3rem;
    }
    
    .mb-md-b {
        margin-bottom: 4rem;
    }
    
    .m-n {
        margin: 0;
    }
    
    .toast-success.toast-success {
        background-color: ${color_tertiary}  ;
        box-shadow: none ;
        border-radius: 0 ;
        color: ${color_black} ;
        align-items: start;
    }
    
    .toast-progress-success.toast-progress-success {
        background-color: ${color_secondary}  ;
    }
    
    ::selection {
    background-color: ${color_primary};
    color: ${color_white};
}
`;

export default GlobalStyles;
