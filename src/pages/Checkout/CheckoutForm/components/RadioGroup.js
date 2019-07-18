import React from 'react';
import styled from 'styled-components';

import { InputLabel } from '../elements';
import CustomRadio from './CustomRadio';
import { font_quaternary } from 'styles/variables';

const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    :not(:first-child) {
        margin-top: 2rem;
    }
`;

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RadioLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    line-height: normal;
    padding-left: 3rem;
    ${font_quaternary};
    :first-of-type {
        margin-top: 1rem;
    }
    &:not(:first-of-type) {
        margin-top: 2rem;
    }
`;

const RadioGroup = ({
    input,
    options,
    label,
    handleChange,
    loadAddressOptions
}) => (
    <GroupContainer>
        <InputLabel>{label}</InputLabel>
        {options.map(({ value, label, renderSection }) => {
            return (
                <RadioContainer key={value}>
                    <RadioLabel>
                        <CustomRadio
                            type="radio"
                            {...input}
                            value={value}
                            checked={value === input.value}
                            onChange={e => {
                                input.onChange(e);
                                handleChange && handleChange(e);
                            }}
                        />
                        {label}
                    </RadioLabel>
                    {value === input.value &&
                        renderSection &&
                        renderSection({ loadOptions: loadAddressOptions })}
                </RadioContainer>
            );
        })}
    </GroupContainer>
);

export default RadioGroup;
