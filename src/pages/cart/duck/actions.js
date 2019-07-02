import types from './types';

export const addToCartRequest = productID => ({
    type: types.ADD_TO_CART_REQUEST,
    productID
});

export const addToCartSuccess = (productID, quantity = 1) => ({
    type: types.ADD_TO_CART_SUCCESS,
    productID,
    quantity
});

export const removeFromCart = ID => ({
    type: types.REMOVE_FROM_CART_REQUEST
});

export const requestCartProducts = () => ({
    type: types.REQUEST_CART_PRODUCTS
});

export const receiveCartProducts = products => ({
    type: types.RECEIVE_CART_PRODUCTS,
    products
});
