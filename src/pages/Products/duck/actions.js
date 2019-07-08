import types from './types';

export const requestProducts = () => ({
    type: types.GET_PRODUCTS_REQUEST
});

export const receiveProducts = products => ({
    type: types.GET_PRODUCTS_SUCCESS,
    products
});
