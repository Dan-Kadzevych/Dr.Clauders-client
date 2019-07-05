import types from './types';

const initialState = {
    products: [],
    isLoading: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCTS:
            return { ...state, products: [], isLoading: true };
        case types.RECEIVE_PRODUCTS:
            return { ...state, products: action.products, isLoading: false };
        default:
            return state;
    }
};

export default productsReducer;
