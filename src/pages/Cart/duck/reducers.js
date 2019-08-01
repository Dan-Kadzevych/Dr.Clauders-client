import { combineReducers } from 'redux';
import includes from 'lodash/includes';
import omit from 'lodash/omit';
import difference from 'lodash/difference';
import keyBy from 'lodash/keyBy';
import get from 'lodash/get';

import types from './types';

const initialState = {
    productIDs: [],
    productsByID: {},
    quantityByID: {},
    requestedIDs: []
};

const productIDs = (state = initialState.productIDs, action) => {
    switch (action.type) {
        case types.UPDATE_CART_SUCCESS:
        case types.INIT_CART_SUCCESS:
            const {
                payload: {
                    cart: { productIDs }
                }
            } = action;

            if (!productIDs) {
                return state;
            }

            return productIDs;
        case types.ADD_TO_CART_SUCCESS:
            const { productID } = action.payload;

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
        case types.INIT_CART_SUCCESS:
            const {
                payload: {
                    cart: { quantityByID }
                }
            } = action;

            if (!quantityByID) {
                return state;
            }

            return quantityByID;
        case types.ADD_TO_CART_SUCCESS:
            const { productID, quantity } = action.payload;

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

const productsByID = (state = initialState.productsByID, action) => {
    switch (action.type) {
        case types.UPDATE_CART_SUCCESS:
        case types.INIT_CART_SUCCESS:
            return keyBy(action.payload.cart.products, '_id');
        case types.ADD_TO_CART_SUCCESS:
            if (!get(action, 'payload.product._id')) {
                return state;
            }

            return {
                ...state,
                [get(action, 'payload.product._id')]: action.payload.product
            };
        case types.REMOVE_FROM_CART_SUCCESS:
            return omit(state, action.productIDs);
        default:
            return state;
    }
};

const requestedIDs = (state = initialState.requestedIDs, { type, payload }) => {
    switch (type) {
        case types.ADD_TO_CART_REQUEST:
            if (includes(state, payload.productID)) {
                return state;
            }

            return [...state, payload.productID];
        case types.ADD_TO_CART_SUCCESS:
        case types.ADD_TO_CART_FAILURE:
            return state.filter(el => el !== payload.productID);
        default:
            return state;
    }
};

export default combineReducers({
    productIDs,
    quantityByID,
    productsByID,
    requestedIDs
});
