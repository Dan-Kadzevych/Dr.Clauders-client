import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

import { ErrorMessage, InputLabel } from 'elements';
import { phoneFormat } from 'duck/constants';

import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px 0;

    :not(:first-child) {
        margin-top: 1rem;
    }
`;

const StyledInput = styled(({ error, touched, phone, ...params }) =>
    phone ? (
        <NumberFormat {...params} format={phoneFormat} mask="_" />
    ) : (
        <input {...params} />
    )
)`
    line-height: 2.8rem;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: 1.2rem 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.13);

    :focus {
        outline: none;
    }

    ${borderError};
`;

const Input = ({
    input,
    type,
    label,
    meta: { touched, error },
    placeholder,
    mask
}) => {
    if (mask === 'phone') {
    }

    return (
        <InputContainer>
            <InputLabel> {label} </InputLabel>

            <StyledInput
                {...input}
                error={touched && error}
                touched={touched && !error}
                placeholder={placeholder}
                type={type}
                phone={mask === 'phone'}
            />

            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
};

export default Input;
