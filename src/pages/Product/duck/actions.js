import types from './types';

export const getProductRequest = () => ({
    type: types.GET_PRODUCT_REQUEST
});

export const getProductSuccess = product => ({
    type: types.GET_PRODUCT_SUCCESS,
    payload: { product }
});

export const getProductFailure = error => ({
    type: types.GET_PRODUCT_FAILURE,
    payload: { error }
});

export const removeProduct = () => ({
    type: types.REMOVE_PRODUCT
});

export default { getProductRequest, getProductSuccess, getProductFailure };
