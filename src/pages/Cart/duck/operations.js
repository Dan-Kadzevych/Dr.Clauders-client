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
    addToCartFailure,
    removeFromCartRequest,
    removeFromCartSuccess,
    removeFromCartFailure,
    getCartProductsRequest,
    getCartProductsSuccess,
    getCartProductsFailure,
    getCartProductRequest,
    getCartProductSuccess,
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

        if (!productIDs.length) {
            return;
        }

        dispatch(getCartProductsRequest());

        const { data } = await axios.get('/api/product/get_cart_products', {
            params: {
                productIDs
            }
        });

        return dispatch(getCartProductsSuccess(data));
    } catch (e) {
        return dispatch(getCartProductsFailure(e.message));
    }
};

export const fetchCartProduct = _id => async dispatch => {
    try {
        dispatch(getCartProductRequest());

        const { data } = await getProduct({ _id });

        return dispatch(getCartProductSuccess(data));
    } catch (e) {
        return dispatch(getCartProductFailure(e.message));
    }
};

export const addToCart = (productID, quantity = 1) => async (
    dispatch,
    getState
) => {
    try {
        dispatch(addToCartRequest(productID));

        const isAuthorized = getIsAuthorized(getState());

        if (isAuthorized) {
            const { data } = await withToken.patch('/api/cart', {
                productID,
                quantity
            });

            syncLSWithCart(pick(data, CART_TO_SYNC));
        }

        dispatch(addToCartSuccess(productID, quantity));
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
            const { data } = await withToken.delete('/api/cart', {
                data: { productIDs }
            });

            syncLSWithCart(pick(data, CART_TO_SYNC));
        }

        return dispatch(removeFromCartSuccess(productIDs));
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

        syncLSWithCart(pick(newCart, CART_TO_SYNC));

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
