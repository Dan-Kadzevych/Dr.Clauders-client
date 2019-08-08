import createReducer from 'utils/redux/createReducer';
import types from './types';

const initialState = {
    updatedCategory: null
};

const startUpdatingCategory = (state = {}, { payload: { category } }) => ({
    ...state,
    updatedCategory: category
});
const stopUpdatingCategory = (state = {}) => ({
    ...state,
    updatedCategory: null
});

const handlers = {
    [types.START_UPDATING_CATEGORY]: startUpdatingCategory,
    [types.STOP_UPDATING_CATEGORY]: stopUpdatingCategory
};

export default createReducer(initialState, handlers);
