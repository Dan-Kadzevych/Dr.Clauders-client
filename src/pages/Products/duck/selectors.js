import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getCurrentLocation, getAllCategories } from 'duck/selectors';
import { createLoadingSelector } from 'loading';
import { GET_PRODUCTS } from './types';

const emptyObj = {};
const emptyArr = [];

const isLoading = createLoadingSelector([GET_PRODUCTS]);
export const getProducts = state =>
    get(state, 'productsPage.products', emptyArr);

const getCurrentCategory = createSelector(
    [getCurrentLocation, getAllCategories],
    (location, categories) =>
        categories.find(({ path }) => path === location) || emptyObj
);

export default {
    getProducts,
    getCurrentCategory,
    isLoading
};
