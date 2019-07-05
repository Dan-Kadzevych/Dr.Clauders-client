import React from 'react';
import styled from 'styled-components';

import { toDark } from 'utils/utils';

import { color_primary, color_white, font_secondary } from 'styles/variables';

const StyledButton = styled.button`
    background-color: ${color_primary};
    border: none;
    padding: 1.7rem 4.5rem;
    display: inline-block;
    ${font_secondary};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${color_white};

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
