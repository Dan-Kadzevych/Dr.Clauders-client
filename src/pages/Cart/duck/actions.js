import types from './types';

export const updateCartRequest = () => ({
    type: types.UPDATE_CART_REQUEST
});

export const updateCartSuccess = cart => ({
    type: types.UPDATE_CART_SUCCESS,
    payload: { cart }
});

export const updateCartFailure = error => ({
    type: types.UPDATE_CART_FAILURE,
    payload: { error }
});

export const initCartRequest = () => ({
    type: types.INIT_CART_REQUEST
});

export const initCartSuccess = cart => ({
    type: types.INIT_CART_SUCCESS,
    payload: { cart }
});

export const initCartFailure = error => ({
    type: types.INIT_CART_FAILURE,
    payload: { error }
});

export const syncCartRequest = () => ({
    type: types.SYNC_CART_REQUEST
});

export const syncCartSuccess = () => ({
    type: types.SYNC_CART_SUCCESS
});

export const syncCartFailure = error => ({
    type: types.SYNC_CART_FAILURE,
    payload: { error }
});

export const addToCartRequest = productID => ({
    type: types.ADD_TO_CART_REQUEST,
    payload: { productID }
});

export const addToCartSuccess = (productID, quantity = 1, product) => ({
    type: types.ADD_TO_CART_SUCCESS,
    payload: { productID, quantity, product }
});

export const addToCartFailure = (error, productID) => ({
    type: types.ADD_TO_CART_FAILURE,
    payload: { error, productID }
});

export const removeFromCartRequest = () => ({
    type: types.REMOVE_FROM_CART_REQUEST
});

export const removeFromCartSuccess = productIDs => ({
    type: types.REMOVE_FROM_CART_SUCCESS,
    productIDs
});

export const removeFromCartFailure = error => ({
    type: types.REMOVE_FROM_CART_FAILURE,
    payload: { error }
});
