import types from './types';

export const updateCartRequest = () => ({
    type: types.UPDATE_CART_REQUEST
});

export const updateCartSuccess = cart => ({
    type: types.UPDATE_CART_SUCCESS,
    cart
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
    cart
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
    productID
});

export const addToCartSuccess = (productID, quantity = 1) => ({
    type: types.ADD_TO_CART_SUCCESS,
    productID,
    quantity
});

export const removeFromCartRequest = () => ({
    type: types.REMOVE_FROM_CART_REQUEST
});
export const removeFromCartSuccess = productIDs => ({
    type: types.REMOVE_FROM_CART_SUCCESS,
    productIDs
});

export const requestCartProducts = () => ({
    type: types.GET_CART_PRODUCTS_REQUEST
});

export const receiveCartProducts = products => ({
    type: types.GET_CART_PRODUCTS_SUCCESS,
    products
});

export const getCartProductsFailure = error => ({
    type: types.GET_CART_PRODUCTS_FAILURE,
    payload: { error }
});

export const requestCartProduct = () => ({
    type: types.GET_CART_PRODUCT_REQUEST
});

export const receiveCartProduct = product => ({
    type: types.GET_CART_PRODUCT_SUCCESS,
    product
});

export const getCartProductFailure = error => ({
    type: types.GET_CART_PRODUCT_FAILURE,
    payload: { error }
});
