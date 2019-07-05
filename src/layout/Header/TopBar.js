import React from 'react';
import styled from 'styled-components';

import { A } from 'elements/index';
import { color_white, color_primary, font_tertiary } from 'styles/variables';
import { gridTemplate } from 'styles/mixins';

const StyledBar = styled.div`
    grid-column: full-start / full-end;

    ${gridTemplate};
    padding: 1rem 0;
    background-color: ${color_primary};
    color: ${color_white};
    ${font_tertiary};
    font-weight: 300;
    line-height: 2.4rem;
    font-size: 1.3rem;
`;

const Icons = styled.div`
    grid-column: col-start 1 / span 1;
`;

const Shipping = styled.div`
    grid-column: col-start 3 / span 3;
    justify-self: center;
    font-size: 1.6rem;
`;

const Menu = styled.div`
    grid-column: col-start 6 / center-end;
    justify-self: end;
`;

const MenuLink = styled(A)`
    :link,
    :visited {
        display: inline-block;
        padding: 0 1rem;
        color: inherit;

        :hover {
            text-decoration: underline;
        }

        :first-child {
            padding-left: 0;
        }

        :last-child {
            padding-right: 0;
        }
    }
`;

const TobBar = () => (
    <StyledBar>
        <Icons>Icons</Icons>
        <Shipping>Low Flat Rate Or Free Shipping Over $49!</Shipping>
        <Menu>
            <MenuLink to="/account">Account</MenuLink> |{' '}
            <MenuLink to="/cart">Cart</MenuLink> |{' '}
            <MenuLink to="/checkout">Checkout</MenuLink>
        </Menu>
    </StyledBar>
);

export default TobBar;
