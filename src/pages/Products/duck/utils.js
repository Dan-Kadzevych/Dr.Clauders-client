import get from 'lodash/get';

const emptyObj = {};

export const getCategoryName = category => {
    const name = get(category, 'name');
    const pet = get(category, 'pet');
    const parent = get(category, 'parent');

    return parent ? `${pet} - ${name}` : name;
};
export const getCategoryID = category => get(category, '_id') || null;
export const getCategoryMedia = category => get(category, 'media') || emptyObj;

export default {
    getCategoryName,
    getCategoryID,
    getCategoryMedia
};
