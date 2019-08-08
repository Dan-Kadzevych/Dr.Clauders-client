import get from 'lodash/get';

import { petOptions } from './constants';

export const formatCategories = categories =>
    categories.map(category => ({
        value: category._id,
        label: category.name
    }));

export const normalizeCategory = values => {
    const normalizedCategory = {};
    const parent = get(values, 'parent.value');

    normalizedCategory.name = values.name;
    normalizedCategory.slug = values.slug;
    normalizedCategory.pet = get(values, 'pet.label');
    normalizedCategory.parent = parent === 0 ? null : parent;

    return normalizedCategory;
};

export const mapCategoryToInitialValues = (category, categoriesOptions) => {
    const initialValues = {};

    initialValues.name = get(category, 'name');
    initialValues.slug = get(category, 'slug.personal');
    initialValues.pet = petOptions.find(
        option => option.label === get(category, 'pet')
    );
    initialValues.parent = categoriesOptions.find(
        option => option.value === get(category, 'parent._id', 0)
    );

    return initialValues;
};

export default {
    normalizeCategory,
    formatCategories,
    mapCategoryToInitialValues
};
