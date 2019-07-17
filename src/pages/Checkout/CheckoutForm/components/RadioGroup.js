import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import { InputLabel } from '../elements';
import CustomRadio from './CustomRadio';
import Select from './VirtualizedSelect';
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

const Address = styled.label`
    padding-left: 3rem;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 6fr 1fr 1fr;
`;

const SmallInput = styled.input`
    line-height: 2.8rem;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.13);
    width: 100%;

    :focus {
        outline: none;
    }
`;

const CustomInput = ({ input, type, meta, placeholder }) => {
    return <SmallInput {...input} type="type" placeholder={placeholder} />;
};

const RadioGroup = ({
    input,
    options,
    label,
    handleChange,
    loadAddressOptions
}) => (
    <GroupContainer>
        <InputLabel>{label}</InputLabel>
        {options.map(({ value, label, type, placeholder, needAddress }) => {
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
                    {value === input.value && needAddress && (
                        <Address>
                            <Field
                                name="address"
                                placeholder={placeholder}
                                component={Select}
                                small
                                creatable
                                loadOptions={loadAddressOptions}
                            />
                            {type === 'street' && (
                                <>
                                    <Field
                                        name="house"
                                        placeholder="Дом"
                                        component={CustomInput}
                                    />
                                    <Field
                                        name="apartment"
                                        placeholder="Кв"
                                        component={CustomInput}
                                    />
                                </>
                            )}
                        </Address>
                    )}
                </RadioContainer>
            );
        })}
    </GroupContainer>
);

export default RadioGroup;
