import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1 } from 'elements';
import CartForm from './CartFrom';
import CartCheckout from './CartCheckout';
import { operations, selectors } from './duck';

const StyledCart = styled.div`
    grid-column: center-start/center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: 1fr 30rem;
`;

const CartHeader = styled.header`
    text-align: center;
    grid-column: 1 / -1;
    margin: 1rem 0;
`;
const CartTitle = styled(H1)`
    font-weight: 300;
`;

const mapStateToProps = state => ({
    cartSummary: selectors.getCartSummary(state),
    isUpdating: selectors.isCartUpdating(state),
    isLoading: selectors.isCartLoadingOrEmpty(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProducts() {
        return dispatch(operations.fetchCartProducts());
    }
});

class Cart extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { cartSummary, isUpdating, isLoading } = this.props;

        return (
            <StyledCart>
                <CartHeader>
                    <CartTitle>Cart</CartTitle>
                </CartHeader>
                <CartForm isUpdating={isUpdating} isLoading={isLoading} />
                {!isLoading && (
                    <CartCheckout
                        totalPrice={cartSummary.price}
                        isUpdating={isUpdating}
                    />
                )}
            </StyledCart>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
