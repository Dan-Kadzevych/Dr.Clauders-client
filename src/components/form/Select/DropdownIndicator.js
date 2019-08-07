import React from 'react';
import { components } from 'react-select';

import { DropdownArrow } from 'components';

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <DropdownArrow
                isOpen={props.selectProps.menuIsOpen}
                icon="drop-down-arrow"
            />
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator;
