export const options = {
    DELIVERY: 'delivery',
    PAYMENT: 'payment'
};

// Wizard form
export const FORM_NAME = 'checkout';

export const fields = {
    FULL_NAME: 'fullName',
    EMAIL: 'email',
    PHONE: 'phone',
    CITY: 'city',
    DELIVERY: 'delivery',
    ADDRESS: 'address',
    PAYMENT: 'payment'
};

const steps = {
    USER_INFO: 'userInfo',
    DELIVERY: 'delivery',
    PAYMENT: 'payment'
};

const stepIDs = {
    [steps.USER_INFO]: 1,
    [steps.DELIVERY]: 2,
    [steps.PAYMENT]: 3
};

export const stepFields = {
    [stepIDs[steps.USER_INFO]]: [fields.FULL_NAME, fields.EMAIL, fields.PHONE],
    [stepIDs[steps.DELIVERY]]: [fields.CITY, fields.ADDRESS],
    [stepIDs[steps.PAYMENT]]: [fields.PAYMENT]
};

export const initialValues = {
    [fields.FULL_NAME]: '',
    [fields.EMAIL]: '',
    [fields.PHONE]: '',
    [fields.CITY]: null,
    [fields.DELIVERY]: null,
    [fields.ADDRESS]: null,
    [fields.PAYMENT]: null
};

export default {
    options,
    fields,
    FORM_NAME,
    stepFields,
    steps,
    stepIDs,
    initialValues
};
