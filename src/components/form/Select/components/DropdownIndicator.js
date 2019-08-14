import React from 'react';
import { components } from 'react-select';

import { DropdownArrow } from 'components/index';

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <DropdownArrow isOpen={props.selectProps.menuIsOpen} />
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator;
