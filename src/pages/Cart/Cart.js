import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1 } from 'elements';
import CartForm from './CartFrom';
import CartCheckout from './CartCheckout';
import { operations, selectors } from './duck';
import { color_secondary } from 'styles/variables';

const StyledCart = styled.div`
    grid-column: center-start/center-end;
    margin-bottom: 8.5rem;
    margin-top: 5rem;

    display: grid;
    grid-template-columns: 1fr 30rem;
`;

const CartHeader = styled.header`
    text-align: center;
    grid-column: 1 / -1;
`;
const CartTitle = styled(H1)`
    font-weight: 300;
    color: ${color_secondary};
`;

const mapStateToProps = state => ({
    cartTotal: selectors.getCartTotal(state),
    isUpdating: selectors.isCartUpdating(state),
    isLoading: selectors.isCartLoading(state)
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
        const { cartTotal, isUpdating, isLoading } = this.props;

        return (
            <StyledCart>
                <CartHeader>
                    <CartTitle>Cart</CartTitle>
                </CartHeader>
                <CartForm isUpdating={isUpdating} isLoading={isLoading} />
                {!isLoading && (
                    <CartCheckout total={cartTotal} isUpdating={isUpdating} />
                )}
            </StyledCart>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
