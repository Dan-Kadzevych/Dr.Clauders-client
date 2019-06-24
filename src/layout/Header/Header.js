import React from 'react';
import styled from 'styled-components';

import HeaderNav from './HeaderNav';
import { A } from 'elements';

import logo from 'images/logo.jpg';

const StyledHeader = styled.header`
    grid-column: center-start / center-end;

    display: grid;
    align-items: center;
    padding: 2rem 0;

    grid-template-columns:
        [header-start] repeat(
            8,
            [col-start] minmax(min-content, 14rem) [col-end]
        )
        [header-end];
`;

const LogoBox = styled(A)`
    grid-column: col-start 1 / col-end 1;
    cursor: pointer;
`;

const Logo = styled.img`
    width: 20rem;
    height: auto;
`;

const Header = props => (
    <StyledHeader>
        <LogoBox to="/">
            <Logo src={logo} alt="Dr Clauder's" />
        </LogoBox>
        <HeaderNav {...props} />
    </StyledHeader>
);

export default Header;
