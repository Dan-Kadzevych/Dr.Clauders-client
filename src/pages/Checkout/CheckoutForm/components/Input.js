import React from 'react';
import styled from 'styled-components';

import { InputLabel } from '../elements/index';
import { font_quaternary } from 'styles/variables';

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
`;

const Input = ({ input, type, label, meta, placeholder }) => (
    <InputContainer>
        <InputLabel> {label} </InputLabel>
        <StyledInput {...input} placeholder={placeholder} type={type} />
    </InputContainer>
);

export default Input;
