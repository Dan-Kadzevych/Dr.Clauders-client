import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1, PageHeader } from 'elements';
import CartForm from './CartFrom';
import CartCheckout from './CartCheckout';
import { selectors } from './duck';

const StyledCart = styled.div`
    grid-column: center-start/center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: 1fr 30rem;
`;

const CartTitle = styled(H1)`
    font-weight: 300;
`;

const mapStateToProps = state => ({
    cartSummary: selectors.getCartSummary(state),
    isUpdating: selectors.isCartUpdating(state),
    isLoading: selectors.getIsCartLoading(state),
    isEmpty: selectors.getIsCartEmpty(state)
});

const Cart = ({ cartSummary, isUpdating, isLoading, isEmpty }) => (
    <StyledCart>
        <PageHeader>
            <CartTitle>Cart</CartTitle>
        </PageHeader>
        <CartForm
            isUpdating={isUpdating}
            isLoading={isLoading}
            isEmpty={isEmpty}
        />
        {!isLoading && !isEmpty && (
            <CartCheckout
                totalPrice={cartSummary.price}
                isUpdating={isUpdating}
            />
        )}
    </StyledCart>
);

export default connect(
    mapStateToProps,
    null
)(Cart);
