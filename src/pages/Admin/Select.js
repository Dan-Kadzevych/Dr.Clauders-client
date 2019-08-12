import React from 'react';
import styled from 'styled-components';

import { components } from 'components/form/Select';
import { Select as StyledSelect, InputLabel, ErrorMessage } from 'elements';

const SelectContainer = styled.div`
    padding: 3px 0;
`;

const Select = ({
    input,
    placeholder,
    label,
    disabled,
    handleChange,
    meta: { touched, error },
    ...other
}) => {
    return (
        <SelectContainer>
            <InputLabel>{label}</InputLabel>

            <StyledSelect
                {...other}
                {...input}
                isClearable
                isDisabled={disabled}
                placeholder={placeholder || 'Выбрать...'}
                components={components}
                classNamePrefix="Select"
                onChange={value => {
                    input.onChange(value);
                    handleChange && handleChange(value);
                }}
                onBlur={() => input.onBlur(input.value)}
                error={touched && error}
                noOptionsMessage={() => 'Ничего не найдено'}
            />
            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        </SelectContainer>
    );
};

export default Select;
