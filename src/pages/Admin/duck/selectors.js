import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getParentCategories, getCategories } from 'duck/selectors';
import {
    formatCategories,
    formatCategoriesByParent,
    mapCategoryToInitialValues
} from './utils';
import { categoryInitialValues } from './constants';

export const getUpdatedCategory = state =>
    get(state, 'adminPage.updatedCategory');

export const getCategoriesOptions = createSelector(
    getCategories,
    categories => formatCategoriesByParent(categories)
);

export const getParentCategoriesOptions = createSelector(
    getParentCategories,
    categories => [{ value: 0, label: 'Нет' }, ...formatCategories(categories)]
);

export const getCategoryInitialValues = createSelector(
    [getUpdatedCategory, getParentCategoriesOptions],
    (updatedCategory, categoriesOptions) =>
        updatedCategory
            ? mapCategoryToInitialValues(updatedCategory, categoriesOptions)
            : categoryInitialValues
);

export default {
    getParentCategoriesOptions,
    getCategoriesOptions,
    getUpdatedCategory,
    getCategoryInitialValues
};
