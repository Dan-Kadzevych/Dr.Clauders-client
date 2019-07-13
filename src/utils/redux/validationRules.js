import validator from 'validator';

import isFieldEmpty from 'utils/redux/isFieldEmpty';
import { phoneMask } from 'utils/phone';

export const required = value => {
    return isFieldEmpty(value) ? 'Required' : null;
};
export const number = value => {
    if (!isFieldEmpty(value) && Number.isNaN(Number(value))) {
        return 'Must be a number';
    }
};

const fullNamePattern = /^[a-zA-Zа-яА-Я ]{2,100}$/;

export const cyrillic = value => {
    if (!isFieldEmpty(value) && !fullNamePattern.test(value)) {
        return `Must contain only cyrillic symbols`;
    }
};

export const email = value => {
    if (!isFieldEmpty(value) && !validator.isEmail(value)) {
        return `Please, use the correct format`;
    }
};

export const phone = value => {
    phoneMask.resolve(value);
    if (
        !isFieldEmpty(value) &&
        !validator.isMobilePhone(phoneMask.unmaskedValue, 'uk-UA')
    ) {
        return `Please, use the correct format`;
    }
};

export const minValue = (min, formatter) => value => {
    if (!isFieldEmpty(value) && Number(value) < min) {
        return `Must be greater than or equal to ${
            formatter ? formatter(min) : min
        }`;
    }
};

export const maxValue = (max, formatter) => value => {
    if (!isFieldEmpty(value) && Number(value) > max) {
        return `Must be less than or equal to ${
            formatter ? formatter(max) : max
        }`;
    }
};
