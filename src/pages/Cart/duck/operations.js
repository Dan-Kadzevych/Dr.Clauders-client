import axios from 'axios';
import pick from 'lodash/pick';

import { getProduct } from 'utils/requests';
import {
    initCartRequest,
    initCartSuccess,
    initCartFailure,
    syncCartRequest,
    syncCartSuccess,
    syncCartFailure,
    addToCartRequest,
    addToCartSuccess,
    removeFromCartRequest,
    removeFromCartSuccess,
    requestCartProducts,
    receiveCartProducts,
    getCartProductsFailure,
    requestCartProduct,
    receiveCartProduct,
    getCartProductFailure,
    updateCartRequest,
    updateCartSuccess,
    updateCartFailure
} from './actions';
import { normalizeProductIDs } from './utils';
import { syncLSWithCart, getCartFromLS } from 'utils/localStorage';
import withToken from 'utils/withToken';
import { getCartProductIDs } from './selectors';
import { CART_TO_SYNC } from './constants';
import { getIsAuthorized } from 'pages/Account/duck/selectors';

export const syncCart = () => async (dispatch, getState) => {
    try {
        dispatch(syncCartRequest());
        const { cartPage } = getState();
        const cart = pick(cartPage, CART_TO_SYNC);
        // const isAuthorized = getIsAuthorized(getState());
        //
        // if (isAuthorized) {
        //     await withToken.post('/api/user/sync_cart', {
        //         cart
        //     });
        // }

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

        dispatch(initCartSuccess(cart));

        return dispatch(syncCart());
    } catch (e) {
        return dispatch(initCartFailure());
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
        return dispatch(getCartProductsFailure(e.message));
    }
};

export const fetchCartProduct = _id => async dispatch => {
    try {
        dispatch(requestCartProduct());

        const { data } = await getProduct({ _id });

        return dispatch(receiveCartProduct(data));
    } catch (e) {
        return dispatch(getCartProductFailure(e.message));
    }
};

export const addToCart = (productID, quantity = 1) => async dispatch => {
    dispatch(addToCartRequest(productID));

    dispatch(addToCartSuccess(productID, quantity));
    return dispatch(syncCart());
};

export const removeFromCart = value => async dispatch => {
    const productIDs = normalizeProductIDs(value);

    dispatch(removeFromCartRequest());

    dispatch(removeFromCartSuccess(productIDs));
    return dispatch(syncCart());
};

export const updateCart = cart => async (dispatch, getState) => {
    try {
        let newCart = cart;
        let cartToSync = pick(newCart, CART_TO_SYNC);

        dispatch(updateCartRequest());

        const isAuthorized = getIsAuthorized(getState());

        if (isAuthorized) {
            const { data } = await withToken.post('/api/cart/update', {
                cart: cartToSync
            });

            newCart = data;
        }

        syncLSWithCart(cartToSync);
        return dispatch(updateCartSuccess(newCart));
    } catch (e) {
        return dispatch(updateCartFailure(e.message));
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
