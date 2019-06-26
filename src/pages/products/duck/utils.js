import get from 'lodash/get';

const emptyObj = {};

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

export const getCategoryName = category => {
    const name = get(category, 'name');
    const pet = get(category, 'pet');
    const parent = get(category, 'parent');

    return parent ? `${pet} - ${name}` : name;
};
export const getCategoryID = category => get(category, '_id') || emptyObj;
export const getCategoryMedia = category => get(category, 'media') || emptyObj;

export default {
    getCategoryName,
    getCategoryID,
    getCategoryMedia
};
