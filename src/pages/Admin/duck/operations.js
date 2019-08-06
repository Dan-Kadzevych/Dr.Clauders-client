import withToken from 'utils/withToken';

import actions from './actions';

export const addCategory = category => async dispatch => {
    try {
        dispatch(actions.addCategoryRequest());
        const { data } = await withToken.post('/api/admin/category', category);

        dispatch(actions.addCategorySuccess(data));
    } catch (e) {
        dispatch(actions.addCategoryFailure(e.message));
    }
};

export default { addCategory };
