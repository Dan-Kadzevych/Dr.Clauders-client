import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import get from 'lodash/get';

import { toRgba } from 'utils/utils';
import {
    color_grey_dark_3,
    color_tertiary,
    color_white
} from 'styles/variables';
import A from 'elements/A';

const Submenu = styled.ul`
    list-style-type: none;
    position: absolute;
    left: -3rem;
    width: 28rem;
    transform: scaleY(0);
    transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: center top;
    background-color: rgba(${toRgba(color_tertiary)} 0.94);
    z-index: 1000;
`;

const SubmenuLink = styled(A)`
    :link,
    :visited {
        display: block;
        line-height: 1.5rem;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 1rem 3rem;
    }

    &.active {
        color: ${color_white};
        background-color: rgba(${toRgba(color_grey_dark_3)} 0.94);
    }
`;

const SubmenuElement = styled.li`
    opacity: 0;
    transform: translateX(-2.5rem);
    transition: opacity 25ms, transform 0s 0.15s;

    :hover {
        ${SubmenuLink} {
            color: ${color_white};
            background-color: rgba(${toRgba(color_grey_dark_3)} 0.94);
        }
    }
`;

const HeaderSubMenu = ({ subCategories }) => (
    <Submenu>
        {subCategories.map(subCategory => {
            const fullSlug = get(subCategory, 'slug.full');
            const name = get(subCategory, 'name');

            return (
                <SubmenuElement key={fullSlug}>
                    <SubmenuLink
                        as={NavLink}
                        activeClassName="active"
                        to={fullSlug}
                    >
                        {name}
                    </SubmenuLink>
                </SubmenuElement>
            );
        })}
    </Submenu>
);

export default HeaderSubMenu;
