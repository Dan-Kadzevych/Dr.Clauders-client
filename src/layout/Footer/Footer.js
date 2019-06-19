import React from 'react';
import styled from 'styled-components';

import { color_primary, color_white } from 'styles/variables';

const StyledFooter = styled.footer`
    grid-column: full-start / full-end;
    background-color: ${color_primary};
    color: ${color_white};
    padding: 20rem;
    text-align: center;
    font-size: 5rem;
`;

const Footer = () => <StyledFooter>Footer</StyledFooter>;

export default Footer;
