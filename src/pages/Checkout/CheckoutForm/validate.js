import each from 'lodash/each';

import { email, phone, required } from 'utils/redux/validationRules';
import { fields } from '../duck/constants';

const validations = {
    [fields.FULL_NAME]: [required],
    [fields.EMAIL]: [required, email],
    [fields.PHONE]: [required, phone],
    [fields.CITY]: [required],
    [fields.DELIVERY]: [required],
    [fields.ADDRESS]: [required],
    [fields.PAYMENT]: [required]
};

const getError = (rules, value) => {
    const rule = rules.find(rule => rule(value));

    return rule ? rule(value) : null;
};

const validate = values => {
    const errors = {};

    each(validations, (rules, key) => {
        const error = getError(rules, values[key]);

        if (error) {
            errors[key] = error;
        }
    });

    return errors;
};

export default validate;
