import React from 'react';
import styled from 'styled-components';

import { Icon, ButtonAlt } from 'elements';
import { color_primary, color_secondary } from 'styles/variables';

const RemoveIcon = styled(Icon)`
    fill: ${color_secondary};
    height: 1.5rem;
    width: 1.5rem;
    display: block;
    margin: 0 auto;
    transition: all 0.2s ease;
`;

const StyledRemoveButton = styled(ButtonAlt)`
    background-color: transparent;
    :hover {
        background-color: transparent;
        ${RemoveIcon} {
            fill: ${color_primary};
        }
    }
`;

const RemoveButton = ({ handleClick }) => (
    <StyledRemoveButton type="button" onClick={handleClick}>
        <RemoveIcon icon="close-button" />
    </StyledRemoveButton>
);

export default RemoveButton;
