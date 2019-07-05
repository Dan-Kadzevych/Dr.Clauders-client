import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getCurrentLocation } from 'utils/redux/location';
import { normalizeCategories } from './utils';

const emptyObj = {};
const emptyArr = [];

const getProducts = state => get(state, 'productsPage.products', emptyArr);
const getAllCategories = state => get(state, 'appConfig.navConfig');
const getNormalizedCategories = createSelector(
    getAllCategories,
    normalizeCategories
);

const getCurrentCategory = createSelector(
    [getCurrentLocation, getNormalizedCategories],
    (location, categories) =>
        categories.find(({ slug }) => slug === location) || emptyObj
);

export default {
    getProducts,
    getCurrentCategory
};
