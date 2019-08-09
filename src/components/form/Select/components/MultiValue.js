import React from 'react';
import { components } from 'react-select';

const MultiValue = ({ children, ...props }) => (
    <components.MultiValue {...props}>
        {props.data.parent && `${props.data.parent} - `}
        {children}
    </components.MultiValue>
);

export default MultiValue;
