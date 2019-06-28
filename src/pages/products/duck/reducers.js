import types from './types';

const initialState = {
    products: [],
    filter: '',
    isLoading: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_PRODUCTS:
            return { ...state, products: [], isLoading: true };
        case types.RECEIVE_PRODUCTS:
            return { ...state, products: action.products, isLoading: false };
        case types.SET_PRODUCTS_FILTER:
            return { ...state, filter: action.filter };
        default:
            return state;
    }
};

export default productsReducer;
