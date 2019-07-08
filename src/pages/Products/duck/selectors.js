import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getCurrentLocation, getNormalizedLocations } from 'duck/selectors';
import { createLoadingSelector } from 'loading';
import { GET_PRODUCTS } from './types';

const emptyObj = {};
const emptyArr = [];

const isLoading = createLoadingSelector([GET_PRODUCTS]);
const getProducts = state => get(state, 'productsPage.products', emptyArr);

const getCurrentCategory = createSelector(
    [getCurrentLocation, getNormalizedLocations],
    (location, locations) =>
        locations.find(({ slug }) => slug === location) || emptyObj
);

export default {
    getProducts,
    getCurrentCategory,
    isLoading
};
