import React from 'react';
import styled from 'styled-components';

import { toDark } from 'utils';
import A from './A';

import { color_primary, color_white } from 'styles/variables';

const StyledButton = styled(A)`
    :link,
    :visited {
        background-color: ${color_primary};
        border: none;
        padding: 1.7rem 4.5rem;
        display: inline-block;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;
        color: ${color_white};
    }

    :focus {
        outline: none;
    }

    :hover {
        background-color: ${toDark(color_primary)};
    }
`;

const Button = props => (
    <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
