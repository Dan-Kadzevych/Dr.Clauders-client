import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getParentCategories } from 'duck/selectors';
import {
    formatCategories,
    formatCategoriesByParent,
    mapCategoryToInitialValues,
    mapProductToInitialValues
} from './utils';
import { categoryInitialValues, productInitialValues } from './constants';

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
    getProductInitialValues
};
