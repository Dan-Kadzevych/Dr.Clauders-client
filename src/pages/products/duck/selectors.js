import { createSelector } from 'reselect';
import get from 'lodash/get';

import { normalizeCategories } from './utils';

const emptyObj = {};
const getProductsFilter = state => get(state, 'productsPage.filter');
const getAllProducts = state => get(state, 'productsPage.products');
const getAllCategories = state => get(state, 'appConfig.navConfig');
const getNormalizedCategories = createSelector(
    getAllCategories,
    normalizeCategories
);
const getProducts = createSelector(
    [getProductsFilter, getAllProducts],
    (filter, products) => {
        return products;
    }
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
