import React from 'react';
import styled from 'styled-components';

import { font_quaternary } from 'styles/variables';
import ButtonAlt from 'elements/ButtonAlt';

const Cart = styled.form`
    display: flex;
    margin: 2rem 0 3rem 0;
`;
const CartInputBox = styled.div`
    margin-right: 1.5rem;
    display: block;
`;
const CartInput = styled.input`
    display: block;
    width: 7rem;
    font-size: 1.9rem;
    line-height: 2.8rem;
    padding: 1.2rem 1.5rem;
    ${font_quaternary};
    text-align: center;
    border: 1px solid #ccc;
    height: 4rem;

    :focus {
        outline: none;
    }
`;

const CartFrom = () => (
    <Cart>
        <CartInputBox>
            <CartInput type="number" />
        </CartInputBox>
        <ButtonAlt>Add to cart</ButtonAlt>
    </Cart>
);

export default CartFrom;
