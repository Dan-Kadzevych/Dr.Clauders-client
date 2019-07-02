import { combineReducers } from 'redux';
import includes from 'lodash/includes';

import types from './types';

const initialState = {
    productIDs: [],
    products: [],
    quantityByID: {},
    isLoading: false,
    requestedIDs: []
};

const productIDs = (state = initialState.productIDs, action) => {
    switch (action.type) {
        case types.ADD_TO_CART_SUCCESS:
            const { productID } = action;

            if (includes(state, productID)) {
                return state;
            }

            return [...state, productID];
        default:
            return state;
    }
};

const quantityByID = (state = initialState.quantityByID, action) => {
    switch (action.type) {
        case types.ADD_TO_CART_SUCCESS:
            const { productID } = action;

            return {
                ...state,
                [productID]: (state[productID] || 0) + 1
            };
        default:
            return state;
    }
};

const products = (state = initialState.products, action) => {
    switch (action.type) {
        case types.RECEIVE_CART_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};

const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case types.REQUEST_CART_PRODUCTS:
            return true;
        case types.RECEIVE_CART_PRODUCTS:
            return false;
        default:
            return state;
    }
};

const requestedIDs = (state = initialState.requestedIDs, action) => {
    switch (action.type) {
        case types.ADD_TO_CART_REQUEST:
            if (includes(state, action.productID)) {
                return state;
            }
            return [...state, action.productID];
        case types.ADD_TO_CART_SUCCESS:
            return state.filter(el => el !== action.productID);

        case types.REQUEST_CART_PRODUCTS:
            return true;
        case types.RECEIVE_CART_PRODUCTS:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    productIDs,
    quantityByID,
    products,
    isLoading,
    requestedIDs
});
