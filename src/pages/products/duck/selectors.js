import { createSelector } from 'reselect';
import get from 'lodash/get';

const getProductsFilter = state => get(state, 'productsPage.filter');
const getAllProducts = state => get(state, 'productsPage.products');

const getProducts = createSelector(
    [getProductsFilter, getAllProducts],
    (filter, products) => {
        return products;
    }
);

export default {
    getProducts
};
