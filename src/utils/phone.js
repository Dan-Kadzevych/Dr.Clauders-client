import IMask from 'imask';

import isFieldEmpty from 'utils/redux/isFieldEmpty';

export const phoneMask = IMask.createMask({
    mask: '+{38} ({\\0}00) 000-00-00'
});

export const formatPhone = value => {
    if (isFieldEmpty(value)) {
        return '';
    }

    return phoneMask.resolve(value);
};

export const normalizePhone = value => {
    if (isFieldEmpty(value)) {
        return value;
    }

    return value;
};
