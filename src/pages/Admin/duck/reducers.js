import createReducer from 'utils/redux/createReducer';
import types from './types';

const initialState = {
    update: {
        category: null,
        product: null
    }
};

const startUpdatingCategory = (state = {}, { payload: { category } }) => ({
    ...state,
    update: {
        category: category
    }
});
const stopUpdatingCategory = (state = {}) => ({
    ...state,
    update: {
        category: null
    }
});

const startUpdatingProduct = (state = {}, { payload: { product } }) => ({
    ...state,
    update: {
        product: product
    }
});
const stopUpdatingProduct = (state = {}) => ({
    ...state,
    update: {
        product: null
    }
});

const handlers = {
    [types.START_UPDATING_CATEGORY]: startUpdatingCategory,
    [types.STOP_UPDATING_CATEGORY]: stopUpdatingCategory,
    [types.START_UPDATING_PRODUCT]: startUpdatingProduct,
    [types.STOP_UPDATING_PRODUCT]: stopUpdatingProduct
};

export default createReducer(initialState, handlers);
