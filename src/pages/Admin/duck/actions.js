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
    stopUpdatingCategory
};
