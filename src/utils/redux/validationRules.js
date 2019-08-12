import validator from 'validator';

import isFieldEmpty from 'utils/redux/isFieldEmpty';
import { normalizePhone } from 'utils/phone';

export const required = value => {
    if (isFieldEmpty(value)) {
        return 'Обязательное поле';
    }
};

export const requiredIfNo = field => (value, values) => {
    if (isFieldEmpty(values[field])) {
        if (isFieldEmpty(value)) {
            return 'Обязательное поле';
        }
    }
};

export const number = value => {
    if (!isFieldEmpty(value) && Number.isNaN(Number(value))) {
        return 'Must be a number';
    }
};

export const email = value => {
    if (!isFieldEmpty(value) && !validator.isEmail(value)) {
        return `Пожалуйста, изпользуйте правильный формат`;
    }
};

export const phone = (value = '') => {
    if (
        !isFieldEmpty(value) &&
        !validator.isMobilePhone(normalizePhone(value), 'uk-UA')
    ) {
        return `Пожалуйста, изпользуйте прваильный формат`;
    }
};

export const password = value => {
    if (!isFieldEmpty(value) && value.length < 8) {
        return `Пожалуйста, изпользуйте прваильный формат`;
    }
};

export const slug = value => {
    if (!isFieldEmpty(value) && !/^[a-z0-9-]+$/gi.test(value)) {
        return `Пожалуйста, изпользуйте прваильный формат`;
    }
};

export const minValue = (min, formatter) => value => {
    if (!isFieldEmpty(value) && Number(value) < min) {
        return `Должно быть больше чем ${formatter ? formatter(min) : min}`;
    }
};

export const maxValue = (max, formatter) => value => {
    if (!isFieldEmpty(value) && Number(value) > max) {
        return `Must be less than or equal to ${
            formatter ? formatter(max) : max
        }`;
    }
};
