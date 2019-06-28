import { createSelector } from 'reselect';
import get from 'lodash/get';

import { normalizeCategories } from './utils';

const emptyObj = {};
const emptyArr = [];
const getProductsFilter = state => get(state, 'productsPage.filter');
const getProducts = state => get(state, 'productsPage.products', emptyArr);
const getAllCategories = state => get(state, 'appConfig.navConfig');
const getNormalizedCategories = createSelector(
    getAllCategories,
    normalizeCategories
);

const getCurrentCategory = createSelector(
    [getProductsFilter, getNormalizedCategories],
    (filter, categories) =>
        categories.find(({ slug }) => slug === filter) || emptyObj
);

export default {
    getProducts,
    getCurrentCategory
};
