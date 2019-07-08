import { createSelector } from 'reselect';
import get from 'lodash/get';
import includes from 'lodash/includes';
import mapValues from 'lodash/mapValues';

import { createLoadingSelector } from 'loading';
import {
    INIT_CART,
    REMOVE_FROM_CART,
    GET_CART_PRODUCT,
    GET_CART_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART
} from './types';

const emptyArr = [];
const emptyObj = {};

export const getIsCartLoading = createLoadingSelector([
    INIT_CART,
    GET_CART_PRODUCTS
]);
export const isCartUpdating = createLoadingSelector([
    REMOVE_FROM_CART,
    ADD_TO_CART,
    GET_CART_PRODUCT,
    UPDATE_CART
]);

export const getCartRequestedIDs = state =>
    get(state, 'cartPage.requestedIDs', emptyArr);
export const getCartProductIDs = state =>
    get(state, 'cartPage.productIDs', emptyArr);
export const getCartProducts = state =>
    get(state, 'cartPage.products', emptyArr);
export const getQuantityByID = state =>
    get(state, 'cartPage.quantityByID', emptyObj);

export const getIsProductRequestedFunc = createSelector(
    getCartRequestedIDs,
    requestedIDs => ID => includes(requestedIDs, ID)
);

export const getIsProductAddedFunc = createSelector(
    getCartProductIDs,
    productIDs => ID => includes(productIDs, ID)
);

export const getInitialValues = createSelector(
    getQuantityByID,
    quantityByID => mapValues(quantityByID, String)
);

export const isCartLoading = createSelector(
    [getIsCartLoading, getCartProducts],
    (isLoading, products) => isLoading || !products.length
);

export default {
    getIsProductRequestedFunc,
    getIsProductAddedFunc,
    isCartLoading,
    isCartUpdating,
    getCartProducts,
    getInitialValues,
    getCartProductIDs
};
