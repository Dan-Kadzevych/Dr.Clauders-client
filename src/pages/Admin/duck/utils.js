import get from 'lodash/get';

export const formatCategories = categories =>
    categories.map(category => ({
        value: category._id,
        label: category.name
    }));

export const normalizeCategory = values => {
    const normalizedCategory = {};

    normalizedCategory.name = values.name;
    normalizedCategory.slug = values.slug;
    normalizedCategory.pet = get(values, 'pet.label');
    normalizedCategory.parent =
        get(values, 'parent.value') === 0 ? null : get(values, 'parent.value');

    return normalizedCategory;
};

export default { normalizeCategory, formatCategories };
