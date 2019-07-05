import isFieldEmpty from 'utils/redux/isFieldEmpty';

export const required = value => {
    return isFieldEmpty(value) ? 'Required' : null;
};
export const number = value => {
    if (!isFieldEmpty(value) && Number.isNaN(Number(value))) {
        return 'Must be a number';
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
