import { combineReducers } from 'redux';
import includes from 'lodash/includes';
import omit from 'lodash/omit';
import difference from 'lodash/difference';

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
        case types.UPDATE_CART_SUCCESS:
        case types.INIT_CART:
            const {
                cart: { productIDs }
            } = action;

            if (!productIDs) {
                return state;
            }

            return productIDs;
        case types.ADD_TO_CART_SUCCESS:
            const { productID } = action;

            if (includes(state, productID)) {
                return state;
            }

            return [...state, productID];
        case types.REMOVE_FROM_CART_SUCCESS:
            return difference(state, action.productIDs);
        default:
            return state;
    }
};

const quantityByID = (state = initialState.quantityByID, action) => {
    switch (action.type) {
        case types.UPDATE_CART_SUCCESS:
        case types.INIT_CART:
            const {
                cart: { quantityByID }
            } = action;

            if (!quantityByID) {
                return state;
            }

            return quantityByID;
        case types.ADD_TO_CART_SUCCESS:
            const { productID, quantity } = action;

            return {
                ...state,
                [productID]: (state[productID] || 0) + Number(quantity)
            };
        case types.REMOVE_FROM_CART_SUCCESS:
            return omit(state, action.productIDs);
        default:
            return state;
    }
};

const products = (state = initialState.products, action) => {
    switch (action.type) {
        case types.UPDATE_CART_SUCCESS:
            return action.cart.products;
        case types.RECEIVE_CART_PRODUCTS:
            return action.products;
        case types.RECEIVE_CART_PRODUCT:
            return [...state, action.product];
        case types.REMOVE_FROM_CART_SUCCESS:
            return state.filter(el => !action.productIDs.includes(el._id));
        default:
            return state;
    }
};

const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case types.RECEIVE_CART_PRODUCTS:
        case types.RECEIVE_CART_PRODUCT:
        case types.REMOVE_FROM_CART_SUCCESS:
        case types.UPDATE_CART_SUCCESS:
            return false;
        case types.REMOVE_FROM_CART_REQUEST:
        case types.REQUEST_CART_PRODUCTS:
        case types.REQUEST_CART_PRODUCT:
        case types.UPDATE_CART_REQUEST:
            return true;
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
