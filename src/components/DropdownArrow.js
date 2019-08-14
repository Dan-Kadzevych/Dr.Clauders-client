import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Arrow } from 'images/icons/drop-down-arrow.svg';
import { color_grey_dark_4 } from 'styles/variables';

const StyledArrow = styled(Arrow)`
    height: 1rem;
    width: 1rem;
    fill: ${color_grey_dark_4};
    transform: ${props => (props.isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

const DropdownArrow = ({ isOpen }) => <StyledArrow isOpen={isOpen} />;

export default DropdownArrow;
