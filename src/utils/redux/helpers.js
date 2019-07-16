import keyBy from 'lodash/keyBy';

export const formatQuantityValue = value => {
    return Number(value).toString();
};

export const formatByID = (data, filed) => {
    const byID = keyBy(data, filed);
    const allIDs = Object.keys(byID);

    return { byID, allIDs };
};
