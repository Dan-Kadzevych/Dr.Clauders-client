import React from 'react';
import styled from 'styled-components';

import { ErrorMessage } from 'elements';
import { InputLabel } from '../elements';
import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    :not(:first-child) {
        margin-top: 2rem;
    }
`;

const StyledInput = styled.input`
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
    placeholder
}) => (
    <InputContainer>
        <InputLabel> {label} </InputLabel>
        <StyledInput
            {...input}
            error={touched && error}
            touched={touched && !error}
            placeholder={placeholder}
            type={type}
        />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
);

export default Input;
