import types from './types';

const initialState = {
    product: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REMOVE_PRODUCT:
        case types.GET_PRODUCT_REQUEST:
            return { ...state, product: null };
        case types.GET_PRODUCT_SUCCESS:
            return { ...state, product: action.product };
        default:
            return state;
    }
};

export default productReducer;
