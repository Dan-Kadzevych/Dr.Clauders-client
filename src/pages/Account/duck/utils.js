import each from 'lodash/each';

import { formatPhone } from 'utils/phone';

const normalizers = {
    phone: formatPhone
};

export const normalizeUser = user => {
    const normalizedUser = {};
    each(user, (value, key) => {
        normalizedUser[key] = normalizers[key]
            ? normalizers[key](value)
            : value;
    });
    return normalizedUser;
};
