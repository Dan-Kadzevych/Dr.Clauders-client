import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getParentCategories } from 'duck/selectors';
import { GET_PRODUCTS } from 'pages/Products/duck/types';
import { createLoadingSelector } from 'loading';
import {
    formatCategories,
    formatCategoriesByParent,
    mapCategoryToInitialValues,
    mapProductToInitialValues
} from './utils';
import { categoryInitialValues, productInitialValues } from './constants';
import {
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    UPDATE_CATEGORY,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT
} from './types';

const isProductFormLoading = createLoadingSelector([
    ADD_PRODUCT,
    UPDATE_PRODUCT
]);
const isProductsViewLoading = createLoadingSelector([
    REMOVE_PRODUCT,
    GET_PRODUCTS
]);
const isCategoriesViewLoading = createLoadingSelector([REMOVE_CATEGORY]);
const isCategoryFormLoading = createLoadingSelector([
    ADD_CATEGORY,
    UPDATE_CATEGORY
]);

export const getUpdatedCategory = state =>
    get(state, 'adminPage.update.category');

export const getUpdatedProduct = state =>
    get(state, 'adminPage.update.product');

export const getCategoriesOptions = createSelector(
    getParentCategories,
    categories => formatCategoriesByParent(categories)
);

export const getParentCategoriesOptions = createSelector(
    [getParentCategories, getUpdatedCategory],
    (categories, updatedCategory) => {
        let categoriesOptions = [
            { value: 0, label: 'Нет' },
            ...formatCategories(categories)
        ];
        if (updatedCategory) {
            categoriesOptions = categoriesOptions.filter(
                option => option.value !== updatedCategory.id
            );
        }

        return categoriesOptions;
    }
);

export const getCategoryInitialValues = createSelector(
    [getUpdatedCategory, getParentCategoriesOptions],
    (updatedCategory, categoriesOptions) =>
        updatedCategory
            ? mapCategoryToInitialValues(updatedCategory, categoriesOptions)
            : categoryInitialValues
);

export const getProductInitialValues = createSelector(
    [getUpdatedProduct, getCategoriesOptions],
    (updatedCategory, categoriesOptions) =>
        updatedCategory
            ? mapProductToInitialValues(updatedCategory, categoriesOptions)
            : productInitialValues
);

export default {
    getParentCategoriesOptions,
    getCategoriesOptions,
    getUpdatedCategory,
    getCategoryInitialValues,
    getUpdatedProduct,
    getProductInitialValues,
    isProductFormLoading,
    isProductsViewLoading,
    isCategoriesViewLoading,
    isCategoryFormLoading
};
