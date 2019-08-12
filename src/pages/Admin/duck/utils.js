import get from 'lodash/get';
import flatten from 'lodash/flatten';

import isFieldEmpty from 'utils/redux/isFieldEmpty';
import { minValue } from 'utils/redux/validationRules';
import { petOptions } from './constants';

export const requiredIfNoParent = (value, values) => {
    const parent = get(values, 'parent.value');
    if (!parent) {
        if (isFieldEmpty(value)) {
            return 'Обязательное, если нет родителя';
        }
    }
};

export const minValue1 = minValue(1);

export const formatCategory = category => ({
    value: category._id,
    label: category.name,
    pet: category.pet,
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

export const mapProductToInitialValues = (product, categoriesOptions) => {
    const initialValues = {};
    const categoryIDs = get(product, 'categoryIDs', []);

    const childCategories = flatten(
        categoriesOptions.map(category => category.options)
    );

    initialValues.title = get(product, 'title');
    initialValues.slug = get(product, 'slug');
    initialValues.price = get(product, 'price');
    initialValues.description = get(product, 'description');
    initialValues.categories = childCategories.filter(category =>
        categoryIDs.includes(category.value)
    );

    return initialValues;
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
    normalizeProduct
};
