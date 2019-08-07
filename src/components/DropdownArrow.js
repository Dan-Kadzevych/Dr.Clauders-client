import styled from 'styled-components';
import Icon from 'elements/Icon';
import { color_grey_dark_4 } from 'styles/variables';
import React from 'react';

const StyledIcon = styled(Icon)`
    height: 1rem;
    width: 1rem;
    fill: ${color_grey_dark_4};
    transform: ${props => (props.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

const DropdownArrow = ({ isOpen }) => (
    <StyledIcon isOpen={isOpen} icon="drop-down-arrow" />
);

export default DropdownArrow;
