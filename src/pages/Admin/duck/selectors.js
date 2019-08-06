import { createSelector } from 'reselect';

import { getParentCategories } from 'duck/selectors';
import { formatCategories } from './utils';

export const getCategoriesOptions = createSelector(
    getParentCategories,
    categories => [{ value: 0, label: 'Нет' }, ...formatCategories(categories)]
);

export default { getCategoriesOptions };
