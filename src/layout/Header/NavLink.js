import React from 'react';
import styled, { css } from 'styled-components';

import A from 'elements/A';
import { LINK_STATES } from './duck/constants';
import { color_primary } from 'styles/variables';

const Link = styled(A)`
    :link,
    :visited {
        line-height: 4.6rem;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
        position: relative;
    }
    ${props => {
        switch (props.state) {
            case LINK_STATES.ACTIVE:
                return css`
                    && {
                        color: ${color_primary};
                    }
                    ::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        bottom: 5px;
                        left: 0;
                        background-color: ${color_primary};
                    }
                `;
            case LINK_STATES.MATCHED:
                return css`
                    ::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        bottom: 5px;
                        left: 0;
                        background-color: ${color_primary};
                    }
                `;
            default:
                return;
        }
    }}

    &:hover {
        color: ${color_primary};
    }
`;

const NavLink = props => {
    const { path, link } = props;
    let linkState;

    if (path === link) {
        linkState = LINK_STATES.ACTIVE;
    } else if (path.includes(link)) {
        linkState = LINK_STATES.MATCHED;
    } else {
        linkState = LINK_STATES.PASSIVE;
    }

    return (
        <Link state={linkState} to={link}>
            {props.children}
        </Link>
    );
};

export default NavLink;
