import { createSelector } from 'reselect';
import get from 'lodash/get';
import includes from 'lodash/includes';
import mapValues from 'lodash/mapValues';

const emptyArr = [];
const emptyObj = {};

export const getIsLoading = state => get(state, 'cartPage.isLoading');
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

export default { getIsProductRequestedFunc, getIsProductAddedFunc };
