import types from './types';

export const requestProducts = () => ({
    type: types.REQUEST_PRODUCTS
});

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});
