import forEach from 'lodash/forEach';

export const findKeys = (obj, func) => {
    const res = [];

    forEach(obj, (val, key) => {
        if (func(val)) {
            res.push(key);
        }
    });

    return res;
};
