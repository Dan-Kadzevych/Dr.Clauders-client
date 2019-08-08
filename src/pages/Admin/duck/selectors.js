import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getParentCategories } from 'duck/selectors';
import { formatCategories, mapCategoryToInitialValues } from './utils';
import { categoryInitialValues } from './constants';

export const getUpdatedCategory = state =>
    get(state, 'adminPage.updatedCategory');

export const getCategoriesOptions = createSelector(
    getParentCategories,
    categories => [{ value: 0, label: 'Нет' }, ...formatCategories(categories)]
);

export const getCategoryInitialValues = createSelector(
    [getUpdatedCategory, getCategoriesOptions],
    (updatedCategory, categoriesOptions) =>
        updatedCategory
            ? mapCategoryToInitialValues(updatedCategory, categoriesOptions)
            : categoryInitialValues
);

export default {
    getCategoriesOptions,
    getUpdatedCategory,
    getCategoryInitialValues
};
