import React from 'react';
import styled, { css } from 'styled-components';

import { ButtonAlt } from 'elements';
import Icon from './Icon';
import { color_secondary, color_white } from 'styles/variables';

const Button = styled(ButtonAlt)`
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: ${color_secondary};
    }

    ${({ isLoading }) => {
        if (isLoading) {
            return css`
                opacity: 0.3;
            `;
        }
    }}
`;

const StyledIcon = styled(Icon)`
    display: ${({ hidden }) => (hidden ? 'none' : 'inline-block')}
    height: 1.5rem;
    width: 1.5rem;
    fill: ${color_white};
    margin-left: 0.7rem;
`;

const AddProductBtn = ({
    onClick,
    isLoading,
    isAdded,
    disabled,
    children,
    ...otherProps
}) => (
    <Button
        onClick={onClick}
        isLoading={isLoading}
        disabled={disabled}
        added={isAdded}
        {...otherProps}
    >
        {children}
        <StyledIcon hidden={!isAdded || isLoading} icon="check" />
        <StyledIcon hidden={!isLoading} icon="refresh" />
    </Button>
);

export default AddProductBtn;
