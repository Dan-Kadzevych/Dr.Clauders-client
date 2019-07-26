import axios from 'axios';

import { getProduct } from 'utils/requests';
import {
    initCartRequest,
    initCartSuccess,
    addToCartRequest,
    addToCartSuccess,
    removeFromCartRequest,
    removeFromCartSuccess,
    requestCartProducts,
    receiveCartProducts,
    requestCartProduct,
    receiveCartProduct,
    updateCartRequest,
    updateCartSuccess
} from './actions';
import { normalizeProducIDs } from './utils';
import { syncCartWithLc, getCartFromLc } from 'utils/localStorage';
import { getCartProductIDs } from './selectors';

const isLoggedIn = false;

export const syncCart = () => (dispatch, getState) => {
    try {
        const { cartPage: cart } = getState();
        if (!isLoggedIn) {
            return syncCartWithLc(cart);
        }
    } catch (e) {
        return e;
    }
};

export const initCart = () => dispatch => {
    try {
        dispatch(initCartRequest());
        if (!isLoggedIn) {
            const cart = getCartFromLc();

            dispatch(initCartSuccess(cart));
        }
    } catch (e) {
        return e;
    }
};

export const fetchCartProducts = () => async (dispatch, getState) => {
    try {
        const productIDs = getCartProductIDs(getState());

        if (productIDs.length) {
            dispatch(requestCartProducts());

            const { data } = await axios.get('/api/product/get_cart_products', {
                params: {
                    productIDs
                }
            });

            return dispatch(receiveCartProducts(data));
        }
    } catch (e) {
        return e;
    }
};

export const fetchCartProduct = _id => async dispatch => {
    try {
        dispatch(requestCartProduct());

        const { data } = await getProduct({ _id });

        return dispatch(receiveCartProduct(data));
    } catch (e) {
        return e;
    }
};

export const addToCart = (productID, quantity = 1) => async dispatch => {
    try {
        dispatch(addToCartRequest(productID));

        dispatch(addToCartSuccess(productID, quantity));
        return dispatch(syncCart());
    } catch (e) {
        return e;
    }
};

export const removeFromCart = value => async dispatch => {
    try {
        const productIDs = normalizeProducIDs(value);

        dispatch(removeFromCartRequest());

        dispatch(removeFromCartSuccess(productIDs));
        return dispatch(syncCart());
    } catch (e) {
        return e;
    }
};

export const updateCart = cart => async dispatch => {
    try {
        dispatch(updateCartRequest());

        dispatch(updateCartSuccess(cart));
        return dispatch(syncCart());
    } catch (e) {
        return e;
    }
};

export default {
    initCart,
    fetchCartProducts,
    addToCart,
    removeFromCart,
    updateCart,
    fetchCartProduct
};
