import withToken from 'utils/withToken';
import { SubmissionError } from 'redux-form';

import { getErrorMessage } from 'utils/errors';
import actions, {
    startUpdatingCategory,
    stopUpdatingCategory,
    startUpdatingProduct,
    stopUpdatingProduct
} from './actions';

export const addCategory = category => async dispatch => {
    try {
        dispatch(actions.addCategoryRequest());

        const { data } = await withToken.post('/api/admin/category', category);

        dispatch(actions.addCategorySuccess(data));
    } catch (e) {
        const error = getErrorMessage(e);

        dispatch(actions.addCategoryFailure(error));
        throw new SubmissionError({ _error: error });
    }
};

export const removeCategory = categoryID => async dispatch => {
    try {
        dispatch(actions.removeCategoryRequest());

        const { data } = await withToken.delete(
            `/api/admin/category/${categoryID}`
        );

        dispatch(actions.removeCategorySuccess(data));
    } catch (e) {
        dispatch(actions.removeCategoryFailure(getErrorMessage(e)));
    }
};

export const updateCategory = (id, category) => async dispatch => {
    try {
        dispatch(actions.updateCategoryRequest());

        const { data } = await withToken.patch(
            `/api/admin/category/${id}`,
            category
        );

        dispatch(actions.updateCategorySuccess(data));
        dispatch(stopUpdatingCategory());
    } catch (e) {
        const error = getErrorMessage(e);

        dispatch(actions.updateCategoryFailure(error));
        throw new SubmissionError({ _error: error });
    }
};

export const addProduct = product => async dispatch => {
    try {
        dispatch(actions.addProductRequest());

        const { data } = await withToken.post('/api/admin/product', product);

        dispatch(actions.addProductSuccess(data));
    } catch (e) {
        const error = getErrorMessage(e);

        dispatch(actions.addProductFailure(error));
        throw new SubmissionError({ _error: error });
    }
};

export const updateProduct = (id, product) => async dispatch => {
    try {
        dispatch(actions.updateProductRequest());

        const { data } = await withToken.patch(
            `/api/admin/product/${id}`,
            product
        );

        dispatch(actions.updateProductSuccess(data));
        dispatch(stopUpdatingProduct());
    } catch (e) {
        const error = getErrorMessage(e);

        dispatch(actions.updateProductFailure(error));
        throw new SubmissionError({ _error: error });
    }
};

export const removeProduct = productID => async dispatch => {
    try {
        dispatch(actions.removeProductRequest());

        const { data } = await withToken.delete(
            `/api/admin/product/${productID}`
        );

        dispatch(actions.removeProductSuccess(data));
    } catch (e) {
        dispatch(actions.removeProductFailure(getErrorMessage(e)));
    }
};

export default {
    addCategory,
    updateCategory,
    removeCategory,
    startUpdatingCategory,
    stopUpdatingCategory,
    addProduct,
    updateProduct,
    removeProduct,
    startUpdatingProduct,
    stopUpdatingProduct
};
