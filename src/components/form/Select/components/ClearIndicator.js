import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import Icon from 'elements/Icon';
import { color_grey_dark_4, color_primary } from 'styles/variables';

const ClearIcon = styled(Icon)`
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
        <ClearIcon icon="close-button" />
    </StyledClearIndicator>
);

export default ClearIndicator;
