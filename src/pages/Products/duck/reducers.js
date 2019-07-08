import types from './types';

const initialState = {
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_REQUEST:
            return { ...state, products: [] };
        case types.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.products };
        default:
            return state;
    }
};

export default productsReducer;
