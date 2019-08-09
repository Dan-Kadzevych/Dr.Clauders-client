import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import get from 'lodash/get';

import { color_primary, font_tertiary } from 'styles/variables';
import { getSubmenuDelays } from './duck/utils';
import { getNavConfig } from 'duck/selectors';
import HeaderSubMenu from './HeaderSubMenu';
import NavLink from './NavLink';

const Nav = styled.nav`
    grid-column: col-start 5 / col-end 8;
    font-size: 1.2rem;
    ${font_tertiary};
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
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

const mapStateToProps = state => ({
    navConfig: getNavConfig(state)
});

const HeaderNav = props => (
    <Nav>
        <List>
            {props.navConfig &&
                props.navConfig.map(category => {
                    const path = get(category, 'path');
                    const subCategories = get(category, 'subCategories');
                    const name = get(category, 'name');

                    return (
                        <Element key={name}>
                            <NavLink link={path} path={props.location.pathname}>
                                {name}
                            </NavLink>
                            {subCategories && !!subCategories.length && (
                                <HeaderSubMenu subCategories={subCategories} />
                            )}
                        </Element>
                    );
                })}
        </List>
    </Nav>
);

export default connect(mapStateToProps)(HeaderNav);
