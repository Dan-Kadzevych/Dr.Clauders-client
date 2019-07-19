import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import styled from 'styled-components';

import { _Base } from 'elements';
import { Spinner } from 'blocks';
import {
    getIsFormValid,
    getTotalPrice,
    getDeliveryPriceDescription
} from '../duck/selectros';
import { fetchCartProducts } from 'pages/Cart/duck/operations';
import {
    getCartProducts,
    getQuantityByID,
    getCartSummary,
    getIsCartLoading
} from 'pages/Cart/duck/selectors';
import { Title } from './elements';
import { Summary, Products } from './index';

import { color_grey_light } from 'styles/variables';

const Cart = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2.5rem;
    border-left: 1px solid ${color_grey_light};
`;

const mapStateToProps = state => ({
    isValid: getIsFormValid(state),
    products: getCartProducts(state),
    quantityByID: getQuantityByID(state),
    cartSummary: getCartSummary(state),
    totalPrice: getTotalPrice(state),
    deliveryPrice: getDeliveryPriceDescription(state),
    isCartLoading: getIsCartLoading(state)
});

const mapDispatchToProps = dispatch => ({
    submitCheckout() {
        return dispatch(submit('checkout'));
    },
    fetchCart() {
        return dispatch(fetchCartProducts());
    }
});

class CartSummary extends _Base {
    componentDidMount() {
        const { fetchCart } = this.props;

        fetchCart();
    }

    render() {
        const {
            isValid,
            products,
            quantityByID,
            cartSummary,
            totalPrice,
            deliveryPrice,
            isCartLoading
        } = this.props;

        return (
            <div>
                <Cart>
                    <Title>Your Order</Title>
                    {!isCartLoading ? (
                        <>
                            <Products
                                products={products}
                                quantityByID={quantityByID}
                            />
                            <Summary
                                deliveryPrice={deliveryPrice}
                                totalPrice={totalPrice}
                                cartSummary={cartSummary}
                                submit={this.props.submitCheckout}
                                isValid={isValid}
                            />
                        </>
                    ) : (
                        <Spinner />
                    )}
                </Cart>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartSummary);
