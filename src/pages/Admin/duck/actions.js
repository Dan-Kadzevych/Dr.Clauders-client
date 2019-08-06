import types from './types';

export const addCategoryRequest = () => ({
    type: types.ADD_CATEGORY_REQUEST
});

export const addCategorySuccess = category => ({
    type: types.ADD_CATEGORY_REQUEST,
    payload: { category }
});

export const addCategoryFailure = error => ({
    type: types.ADD_CATEGORY_REQUEST,
    payload: { error }
});

export default { addCategoryRequest, addCategorySuccess, addCategoryFailure };
