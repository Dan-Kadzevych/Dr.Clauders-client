import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';

import { Icon } from 'elements';
import { color_grey_dark_4 } from 'styles/variables';

const DropdownArrow = styled(Icon)`
    height: 1rem;
    width: 1rem;
    fill: ${color_grey_dark_4};
    transform: ${props =>
        props.isMenuOpen ? 'rotate(-180deg)' : 'rotate(0deg)'};
`;

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <DropdownArrow
                isMenuOpen={props.selectProps.menuIsOpen}
                icon="drop-down-arrow"
            />
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator;
