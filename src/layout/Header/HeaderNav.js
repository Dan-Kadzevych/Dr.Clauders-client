import React from 'react';
import styled from 'styled-components';

import { color_primary } from 'styles/variables';
import { NAV_CONFIG } from './duck/constants';
import { getSubmenuDelays } from './duck/utils';
import { A } from 'elements';
import HeaderSubMenu from './HeaderSubMenu';

const Nav = styled.nav`
    grid-column: col-start 5 / col-end 8;
    font-size: 1.2rem;
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`;

const Link = styled(A)`
    :link,
    :visited {
        line-height: 4.6rem;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    &:hover {
        color: ${color_primary};
    }
`;

const Element = styled.li`
    position: relative;
    cursor: pointer;

    :hover {
        ::before {
            width: 100%;
            left: 0;
        }

        & > ul {
            transform: scaleY(1);
        }

        & > ul > li {
            opacity: 1;
            transform: translateX(0);
            transition: opacity 0.25s,
                transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

            ${getSubmenuDelays()}
            :first-child {
                padding-top: 1.3rem;
                transition-delay: 90ms;
            }
        }
    }

    ::before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 5px;
        left: 50%;
        background-color: ${color_primary};
        transition: all 0.2s;
    }
`;

const HeaderNav = () => (
    <Nav>
        <List>
            {NAV_CONFIG.map((el, i) => (
                <Element key={el.text + i}>
                    <Link href={el.link}>{el.text}</Link>
                    {el.subMenu && <HeaderSubMenu config={el.subMenu} />}
                </Element>
            ))}
        </List>
    </Nav>
);

export default HeaderNav;
