import React from 'react';
import styled from 'styled-components';

import { Select as StyledSelect, InputLabel, ErrorMessage } from 'elements';

import { DropdownIndicator } from 'components/form/Select';

const SelectContainer = styled.div`
    padding: 3px 0;
`;

const Select = ({
    input,
    placeholder,
    small,
    label,
    options,
    defaultValue,
    meta: { touched, error }
}) => {
    return (
        <SelectContainer>
            <InputLabel>{label}</InputLabel>

            <StyledSelect
                {...input}
                isClearable
                placeholder={placeholder || ''}
                components={{ DropdownIndicator }}
                classNamePrefix="Select"
                onChange={value => input.onChange(value)}
                onBlur={() => input.onBlur(input.value)}
                small={small}
                options={options}
                error={touched && error}
                noOptionsMessage={() => 'Ничего не найдено'}
            />
            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectContainer>
    );
};

export default Select;
