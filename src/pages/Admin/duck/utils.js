import get from 'lodash/get';

import { petOptions } from './constants';

export const formatCategory = category => ({
    value: category._id,
    label: category.name,
    parent: category.parent && category.parent.name
});

export const formatCategories = categories => categories.map(formatCategory);

export const formatCategoriesByParent = categories =>
    categories.map(category => ({
        label: category.name,
        options: formatCategories(category.subCategories)
    }));

export const normalizeProduct = values => {
    const normalizedProduct = {};

    normalizedProduct.title = values.title;
    normalizedProduct.price = values.price;
    normalizedProduct.slug = values.slug;
    normalizedProduct.description = values.description;
    normalizedProduct.categoryIDs = values.categories.map(
        category => category.value
    );

    return normalizedProduct;
};

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
    initialValues.slug = get(category, 'slug');
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
    normalizeProduct,
    formatCategories,
    formatCategoriesByParent,
    mapCategoryToInitialValues
};
