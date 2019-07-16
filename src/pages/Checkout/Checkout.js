import React from 'react';
import styled from 'styled-components';

import { H1 } from 'elements';
import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';
import { toRgba } from 'utils/utils';
import { color_grey_dark_2 } from 'styles/variables';

const Container = styled.div`
    grid-column: center-start/center-end;

    margin-bottom: 8.5rem;
    margin-top: 4rem;
`;

const StyledCheckout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;
    background-color: rgba(${toRgba(color_grey_dark_2)} 0.1);
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;
const Title = styled(H1)`
    font-weight: 300;
`;

const Checkout = () => (
    <Container>
        <Header>
            <Title>Checkout</Title>
        </Header>
        <StyledCheckout>
            <CheckoutForm />
            <CheckoutCart />
        </StyledCheckout>
    </Container>
);

export default Checkout;
