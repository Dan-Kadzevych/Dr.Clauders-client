import { createSelector } from 'reselect';
import get from 'lodash/get';
import includes from 'lodash/includes';
import mapValues from 'lodash/mapValues';
import compact from 'lodash/compact';

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
export const getIsCartUpdating = createLoadingSelector([
    REMOVE_FROM_CART,
    ADD_TO_CART,
    GET_CART_PRODUCT,
    UPDATE_CART
]);

export const getCartRequestedIDs = state =>
    get(state, 'cartPage.requestedIDs', emptyArr);
export const getCartProductIDs = state =>
    get(state, 'cartPage.productIDs', emptyArr);
export const getCartProductsByID = state =>
    get(state, 'cartPage.productsByID', emptyObj);
export const getQuantityByID = state =>
    get(state, 'cartPage.quantityByID', emptyObj);

export const getIsCartEmpty = createSelector(
    getCartProductsByID,
    products => !Object.keys(products).length
);

export const getCartProducts = createSelector(
    [getCartProductIDs, getCartProductsByID, getIsCartEmpty],
    (productIDs, productsByID, isEmpty) => {
        if (isEmpty) {
            return [];
        }

        return compact(productIDs.map(id => productsByID[id]));
    }
);

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

export const getCartSummary = createSelector(
    [getCartProducts, getQuantityByID],
    (products, quantityByID) => ({
        price: products.reduce((acc, product) => {
            const { price, _id } = product;
            const quantity = get(quantityByID, _id);

            return acc + price * quantity;
        }, 0),
        quantity: Object.values(quantityByID).reduce((acc, el) => acc + el, 0)
    })
);

// Quick fix for add many updating state
export const isCartUpdating = createSelector(
    [getIsCartUpdating, getCartRequestedIDs],
    (isUpdating, requestedIDs) => isUpdating || !!requestedIDs.length
);

export default {
    getIsProductRequestedFunc,
    getIsProductAddedFunc,
    getIsCartLoading,
    getIsCartEmpty,
    isCartUpdating,
    getCartProducts,
    getInitialValues,
    getCartProductIDs,
    getCartSummary
};
