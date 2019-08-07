import get from 'lodash/get';

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

export default { normalizeCategory, formatCategories };
