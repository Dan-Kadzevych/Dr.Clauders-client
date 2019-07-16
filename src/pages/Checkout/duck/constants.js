export const options = {
    DELIVERY: 'delivery',
    PAYMENT: 'payment'
};

// Wizard form
const FORM_NAME = 'checkout';

export const steps = {
    USER_INFO: 'userInfo',
    DELIVERY: 'delivery',
    PAYMENT: 'payment'
};

const fields = {
    FULL_NAME: 'fullName',
    EMAIL: 'email',
    PHONE: 'phone',
    CITY: 'city',
    DELIVERY: 'delivery',
    PAYMENT: 'payment'
};

export const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    initialValues: {
        [fields.FULL_NAME]: '',
        [fields.EMAIL]: '',
        [fields.PHONE]: '',
        [fields.CITY]: null,
        [fields.DELIVERY]: null,
        [fields.PAYMENT]: null
    }
};

export const stepFormConfig = {
    form: FORM_NAME,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
};

export default { options, formConfig, stepFormConfig, fields, FORM_NAME };
