import types from './types';

export const requestProduct = () => ({
    type: types.REQUEST_PRODUCT
});

export const receiveProduct = product => ({
    type: types.RECEIVE_PRODUCT,
    product
});
