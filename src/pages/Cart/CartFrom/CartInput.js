import React from 'react';
import styled from 'styled-components';

import { font_quaternary } from 'styles/variables';

const StyledCartInput = styled.input`
    && {
        display: block;
        width: 7rem;
        font-size: 1.9rem;
        line-height: 2.8rem;
        padding: 1.2rem 1.5rem;
        ${font_quaternary};
        text-align: center;
        border: 1px solid #ccc;
        height: auto;

        :focus {
            outline: none;
        }
    }
`;

const CartInput = ({ input, type }) => (
    <StyledCartInput
        {...input}
        min={0}
        required
        type={type}
        autoComplete="off"
    />
);

export default CartInput;
