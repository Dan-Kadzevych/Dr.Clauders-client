import types from './types';

export const requestProduct = () => ({
    type: types.GET_PRODUCT_REQUEST
});

export const receiveProduct = product => ({
    type: types.GET_PRODUCT_SUCCESS,
    product
});
