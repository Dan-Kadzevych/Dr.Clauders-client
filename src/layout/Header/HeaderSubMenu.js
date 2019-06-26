import React from 'react';
import styled from 'styled-components';

import { toRgba } from 'utils';
import {
    color_grey_dark_3,
    color_secondary,
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
    background-color: rgba(${toRgba(color_secondary)} 0.94);
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

const HeaderSubMenu = ({ config }) => (
    <Submenu>
        {config.map(({ slug, name }) => (
            <SubmenuElement key={slug}>
                <SubmenuLink to={slug}>{name}</SubmenuLink>
            </SubmenuElement>
        ))}
    </Submenu>
);

export default HeaderSubMenu;
