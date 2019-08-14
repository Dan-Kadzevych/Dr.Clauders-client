import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import { color_grey_dark_4, color_primary } from 'styles/variables';

import { ReactComponent as Close } from 'images/icons/close-button.svg';

const ClearIcon = styled(Close)`
    height: 1rem;
    width: 1rem;
    fill: ${color_grey_dark_4};
`;

const StyledClearIndicator = styled(components.ClearIndicator)`
    cursor: pointer;

    :hover {
        ${ClearIcon} {
            fill: ${color_primary};
        }
    }
`;

const ClearIndicator = props => (
    <StyledClearIndicator {...props}>
        <ClearIcon />
    </StyledClearIndicator>
);

export default ClearIndicator;
