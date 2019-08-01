import axios from 'axios';
import pick from 'lodash/pick';

import {
    initCartRequest,
    initCartSuccess,
    initCartFailure,
    syncCartRequest,
    syncCartSuccess,
    syncCartFailure,
    addToCartRequest,
    addToCartSuccess,
    addToCartFailure,
    removeFromCartRequest,
    removeFromCartSuccess,
    removeFromCartFailure,
    updateCartRequest,
    updateCartSuccess,
    updateCartFailure
} from './actions';
import { normalizeProductIDs } from './utils';
import { syncLSWithCart, getCartFromLS } from 'utils/localStorage';
import withToken from 'utils/withToken';
import { getCartProductsByID } from './selectors';
import { CART_TO_SYNC } from './constants';
import { getIsAuthorized } from 'pages/Account/duck/selectors';

export const syncCart = () => async (dispatch, getState) => {
    try {
        dispatch(syncCartRequest());
        const { cartPage } = getState();
        const cart = pick(cartPage, CART_TO_SYNC);

        syncLSWithCart(cart);

        return dispatch(syncCartSuccess());
    } catch (e) {
        return dispatch(syncCartFailure());
    }
};

export const initCart = cartP => async (dispatch, getState) => {
    try {
        dispatch(initCartRequest());

        const isAuthorized = getIsAuthorized(getState());

        const cart = isAuthorized && cartP ? cartP : getCartFromLS();

        if (!isAuthorized) {
            const { data } = await axios.get('/api/product/get_cart_products', {
                params: {
                    productIDs: cart.productIDs
                }
            });

            cart.products = data;
        }

        dispatch(initCartSuccess(cart));

        return dispatch(syncCart());
    } catch (e) {
        return dispatch(initCartFailure(e.message));
    }
};

export const addToCart = (productID, quantity = 1) => async (
    dispatch,
    getState
) => {
    try {
        dispatch(addToCartRequest(productID));

        const isAuthorized = getIsAuthorized(getState());
        const productByID = getCartProductsByID(getState());
        let product = {};

        if (isAuthorized) {
            const { data } = await withToken.patch('/api/cart', {
                productID,
                quantity
            });

            product = data.product;
        } else if (!productByID[productID]) {
            const { data } = await axios.get('/api/product/get_product', {
                params: { _id: productID }
            });

            product = data;
        }

        dispatch(addToCartSuccess(productID, quantity, product));
        return dispatch(syncCart());
    } catch (e) {
        return dispatch(addToCartFailure(e.message, productID));
    }
};

export const removeFromCart = value => async (dispatch, getState) => {
    try {
        const productIDs = normalizeProductIDs(value);

        dispatch(removeFromCartRequest());

        const isAuthorized = getIsAuthorized(getState());

        if (isAuthorized) {
            await withToken.delete('/api/cart', {
                data: { productIDs }
            });
        }

        dispatch(removeFromCartSuccess(productIDs));
        return dispatch(syncCart());
    } catch (e) {
        return dispatch(removeFromCartFailure(e.message));
    }
};

export const updateCart = cart => async (dispatch, getState) => {
    try {
        let newCart = cart;

        dispatch(updateCartRequest());

        const isAuthorized = getIsAuthorized(getState());

        if (isAuthorized) {
            const { data } = await withToken.put('/api/cart', {
                cart: pick(newCart, CART_TO_SYNC)
            });

            newCart = data;
        }

        dispatch(updateCartSuccess(newCart));
        return dispatch(syncCart());
    } catch (e) {
        return dispatch(updateCartFailure(e.message));
    }
};

export default {
    initCart,
    addToCart,
    removeFromCart,
    updateCart
};
