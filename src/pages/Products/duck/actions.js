import types from './types';

export const getProductsRequest = () => ({
    type: types.GET_PRODUCTS_REQUEST
});

export const getProductsSuccess = products => ({
    type: types.GET_PRODUCTS_SUCCESS,
    payload: { products }
});

export const getProductsFailure = error => ({
    type: types.GET_PRODUCTS_SUCCESS,
    payload: { error }
});

export default { getProductsRequest, getProductsSuccess, getProductsFailure };
