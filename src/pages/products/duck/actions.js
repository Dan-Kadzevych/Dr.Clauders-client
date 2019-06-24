import types from './types';

export const setProductsFilter = filter => ({
    type: types.SET_PRODUCTS_FILTER,
    filter
});

export const requestProducts = () => ({
    type: types.REQUEST_PRODUCTS
});

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});
