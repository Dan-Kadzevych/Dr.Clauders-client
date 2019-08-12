import types from './types';
import {
    REMOVE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    ADD_PRODUCT_SUCCESS
} from 'pages/Admin/duck/types';

const initialState = {
    products: []
};

const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return { ...state, products: [] };
        case types.GET_PRODUCTS_SUCCESS:
        case REMOVE_PRODUCT_SUCCESS:
        case UPDATE_PRODUCT_SUCCESS:
        case ADD_PRODUCT_SUCCESS:
            return { ...state, products: payload.products };
        default:
            return state;
    }
};

export default productsReducer;
