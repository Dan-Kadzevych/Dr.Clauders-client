import types from './types';

const initialState = {
    product: null,
    isLoading: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCT:
            return { ...state, product: null, isLoading: true };
        case types.RECEIVE_PRODUCT:
            return { ...state, product: action.product, isLoading: false };
        default:
            return state;
    }
};

export default productReducer;
