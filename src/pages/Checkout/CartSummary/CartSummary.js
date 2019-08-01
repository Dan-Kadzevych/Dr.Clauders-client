import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import styled from 'styled-components';

import { Spinner } from 'blocks';
import {
    getIsFormValid,
    getTotalPrice,
    getDeliveryPriceDescription
} from '../duck/selectros';
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
    justify-content: space-between;
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
    }
});

const CartSummary = ({
    isValid,
    products,
    quantityByID,
    cartSummary,
    totalPrice,
    deliveryPrice,
    isCartLoading,
    submitCheckout
}) => (
    <Cart>
        {!isCartLoading ? (
            <>
                <div>
                    <Title>Your Order</Title>
                    <Products products={products} quantityByID={quantityByID} />
                </div>
                <Summary
                    deliveryPrice={deliveryPrice}
                    totalPrice={totalPrice}
                    cartSummary={cartSummary}
                    submit={submitCheckout}
                    isValid={isValid}
                />
            </>
        ) : (
            <Spinner />
        )}
    </Cart>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartSummary);
