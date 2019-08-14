import React from 'react';
import styled from 'styled-components';

import { ErrorMessage, Label } from 'elements/index';

import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const TextareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px 0;

    :not(:first-child) {
        margin-top: 1rem;
    }
`;

const StyledTextarea = styled.textarea`
    line-height: 2.8rem;
    resize: vertical;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: ${({ small }) => (small ? '0.6rem 0.8rem' : '1.2rem 1.5rem')};
    border: 1px solid rgba(0, 0, 0, 0.13);

    :focus {
        outline: none;
    }

    ${borderError};
`;

const Textarea = ({
    input,
    type,
    label,
    meta: { touched, error },
    placeholder,
    mask,
    small,
    rows
}) => (
    <TextareaContainer>
        <Label> {label} </Label>

        <StyledTextarea
            {...input}
            rows={rows || 8}
            error={touched && error}
            touched={touched && !error}
            placeholder={placeholder}
            type={type}
            small={small}
        />

        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </TextareaContainer>
);

export default Textarea;
