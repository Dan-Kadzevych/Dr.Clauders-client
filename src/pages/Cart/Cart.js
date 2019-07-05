import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1 } from 'elements';
import CartForm from './CartFrom/CartForm';
import { operations } from './duck';
import { color_secondary } from 'styles/variables';

const StyledCart = styled.div`
    grid-column: center-start/center-end;
`;

const CartHeader = styled.header`
    text-align: center;
    margin-top: 5rem;
`;
const CartTitle = styled(H1)`
    font-weight: 300;
    color: ${color_secondary};
`;

const mapDispatchToProps = dispatch => ({
    fetchProducts() {
        return dispatch(operations.fetchCartProducts());
    },
    initCart() {
        return dispatch(operations.initCart());
    }
});

class Cart extends Component {
    componentDidMount() {
        this.props.initCart();
        this.props.fetchProducts();
    }

    render() {
        return (
            <StyledCart>
                <CartHeader>
                    <CartTitle>Cart</CartTitle>
                </CartHeader>
                <CartForm />
            </StyledCart>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Cart);
