import types from './types';

export const addCategoryRequest = () => ({
    type: types.ADD_CATEGORY_REQUEST
});

export const addCategorySuccess = categories => ({
    type: types.ADD_CATEGORY_SUCCESS,
    payload: { categories }
});

export const addCategoryFailure = error => ({
    type: types.ADD_CATEGORY_FAILURE,
    payload: { error }
});

export const removeCategoryRequest = () => ({
    type: types.REMOVE_CATEGORY_REQUEST
});

export const removeCategorySuccess = categories => ({
    type: types.REMOVE_CATEGORY_SUCCESS,
    payload: { categories }
});

export const removeCategoryFailure = error => ({
    type: types.REMOVE_CATEGORY_FAILURE,
    payload: { error }
});

export const updateCategoryRequest = () => ({
    type: types.UPDATE_CATEGORY_REQUEST
});

export const updateCategorySuccess = categories => ({
    type: types.UPDATE_CATEGORY_SUCCESS,
    payload: { categories }
});

export const updateCategoryFailure = error => ({
    type: types.UPDATE_CATEGORY_FAILURE,
    payload: { error }
});

export const startUpdatingCategory = category => ({
    type: types.START_UPDATING_CATEGORY,
    payload: { category }
});

export const stopUpdatingCategory = () => ({
    type: types.STOP_UPDATING_CATEGORY
});

export const addProductRequest = () => ({
    type: types.ADD_PRODUCT_REQUEST
});

export const addProductSuccess = products => ({
    type: types.ADD_PRODUCT_SUCCESS,
    payload: { products }
});

export const addProductFailure = error => ({
    type: types.ADD_PRODUCT_FAILURE,
    payload: { error }
});

export const removeProductRequest = () => ({
    type: types.REMOVE_PRODUCT_REQUEST
});

export const removeProductSuccess = categories => ({
    type: types.REMOVE_PRODUCT_SUCCESS,
    payload: { categories }
});

export const removeProductFailure = error => ({
    type: types.REMOVE_PRODUCT_FAILURE,
    payload: { error }
});

export const updateProductRequest = () => ({
    type: types.UPDATE_PRODUCT_REQUEST
});

export const updateProductSuccess = categories => ({
    type: types.UPDATE_PRODUCT_SUCCESS,
    payload: { categories }
});

export const updateProductFailure = error => ({
    type: types.UPDATE_PRODUCT_FAILURE,
    payload: { error }
});

export const startUpdatingProduct = category => ({
    type: types.START_UPDATING_PRODUCT,
    payload: { category }
});

export const stopUpdatingProduct = () => ({
    type: types.STOP_UPDATING_PRODUCT
});

export default {
    addCategoryRequest,
    addCategorySuccess,
    addCategoryFailure,
    removeCategoryRequest,
    removeCategorySuccess,
    removeCategoryFailure,
    updateCategoryRequest,
    updateCategorySuccess,
    updateCategoryFailure,
    startUpdatingCategory,
    stopUpdatingCategory,
    addProductRequest,
    addProductSuccess,
    addProductFailure,
    removeProductRequest,
    removeProductSuccess,
    removeProductFailure,
    updateProductRequest,
    updateProductSuccess,
    updateProductFailure,
    startUpdatingProduct,
    stopUpdatingProduct
};
