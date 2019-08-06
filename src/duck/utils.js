import get from 'lodash/get';

export const normalizeCategories = categories => {
    const normalizedCategories = [];
    categories.forEach(category => {
        const subCategories = get(category, 'subCategories');
        if (subCategories && subCategories.length) {
            subCategories.forEach(subCategory =>
                normalizedCategories.push(subCategory)
            );
        }
        normalizedCategories.push(category);
    });
    return normalizedCategories;
};
