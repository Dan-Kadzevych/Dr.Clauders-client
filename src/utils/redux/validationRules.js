import validator from 'validator';
import isFieldEmpty from 'utils/redux/isFieldEmpty';

export const required = value => {
    if (isFieldEmpty(value)) {
        return 'Обязательное поле';
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
    if (!isFieldEmpty(value) && !validator.isMobilePhone(value, 'uk-UA')) {
        return `Пожалуйста, изпользуйте прваильный формат`;
    }
};

export const password = value => {
    if (!isFieldEmpty(value) && value.length < 8) {
        return `Пожалуйста, изпользуйте прваильный формат`;
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
