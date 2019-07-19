import React from 'react';
import styled from 'styled-components';

import { ButtonAlt, H2, A } from 'elements';
import { Spinner } from 'blocks';
import { toUAH } from 'utils/currencyFormatters';
import { toRgba } from 'utils/utils';

import { color_grey_dark_2, color_secondary } from 'styles/variables';

const StyledCheckout = styled.div`
    grid-column: 2/-1;

    background-color: rgba(${toRgba(color_grey_dark_2)} 0.1);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const StyledH2 = styled(H2)`
    font-size: 2.6rem;
`;

const TotalPrice = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${color_secondary};
`;

const CheckoutBtn = styled(ButtonAlt)`
    width: 100%;
`;

const CartCheckout = ({ totalPrice, isUpdating }) => (
    <StyledCheckout>
        <CartTotal>
            <StyledH2>Cart Total:</StyledH2>
            <TotalPrice>{toUAH(totalPrice)}</TotalPrice>
        </CartTotal>

        <A to="/checkout">
            <CheckoutBtn>Proceed to Checkout</CheckoutBtn>
        </A>
        {isUpdating && <Spinner />}
    </StyledCheckout>
);

export default CartCheckout;
