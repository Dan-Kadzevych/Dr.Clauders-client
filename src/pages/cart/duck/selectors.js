import { createSelector } from 'reselect';
import get from 'lodash/get';
import includes from 'lodash/includes';

export const getCartRequestedIDs = state => get(state, 'cartPage.requestedIDs');
export const getCartProductIDs = state => get(state, 'cartPage.productIDs');

export const getIsProductRequestedFunc = createSelector(
    getCartRequestedIDs,
    requestedIDs => ID => includes(requestedIDs, ID)
);

export const getIsProductAddedFunc = createSelector(
    getCartProductIDs,
    productIDs => ID => includes(productIDs, ID)
);

export default { getIsProductRequestedFunc, getIsProductAddedFunc };
