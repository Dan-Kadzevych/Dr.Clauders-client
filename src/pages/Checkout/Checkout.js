import React from 'react';
import styled from 'styled-components';

import { H1, PageHeader } from 'elements';
import { toRgba } from 'utils/utils';
import CartSummary from './CartSummary';
import CheckoutForm from './CheckoutForm';
import { color_grey_dark_2 } from 'styles/variables';

const Container = styled.div`
    grid-column: center-start/center-end;

    margin-bottom: 8.5rem;
    margin-top: 4rem;
`;

const StyledCheckout = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5rem;
    padding: 3rem;
    background-color: rgba(${toRgba(color_grey_dark_2)} 0.1);
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const Checkout = () => (
    <Container>
        <PageHeader>
            <Title>Checkout</Title>
        </PageHeader>
        <StyledCheckout>
            <CheckoutForm />
            <CartSummary />
        </StyledCheckout>
    </Container>
);

export default Checkout;
