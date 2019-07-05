import types from './types';

export const updateCartRequest = () => ({
    type: types.UPDATE_CART_REQUEST
});

export const updateCartSuccess = cart => ({
    type: types.UPDATE_CART_SUCCESS,
    cart
});

export const initCartSuccess = cart => ({
    type: types.INIT_CART,
    cart
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
    type: types.REQUEST_CART_PRODUCTS
});

export const receiveCartProducts = products => ({
    type: types.RECEIVE_CART_PRODUCTS,
    products
});

export const requestCartProduct = () => ({
    type: types.REQUEST_CART_PRODUCT
});

export const receiveCartProduct = product => ({
    type: types.RECEIVE_CART_PRODUCT,
    product
});
