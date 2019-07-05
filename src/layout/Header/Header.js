import React from 'react';
import styled from 'styled-components';

import HeaderNav from './HeaderNav';
import TopBar from './TopBar';
import { A } from 'elements';
import { gridTemplate } from 'styles/mixins';

import logo from 'images/logo.jpg';

const HeaderContainer = styled.header`
    grid-column: full-start / full-end;

    ${gridTemplate};
`;

const StyledHeader = styled.div`
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
    <HeaderContainer>
        <TopBar />
        <StyledHeader>
            <LogoBox to="/">
                <Logo src={logo} alt="Dr Clauder's" />
            </LogoBox>
            <HeaderNav {...props} />
        </StyledHeader>
    </HeaderContainer>
);

export default Header;
