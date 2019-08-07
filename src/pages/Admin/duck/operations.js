import withToken from 'utils/withToken';
import { SubmissionError } from 'redux-form';

import { getErrorMessage } from 'utils/errors';
import actions from './actions';

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

export default { addCategory, removeCategory };
