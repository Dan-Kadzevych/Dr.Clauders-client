import { FORM_NAME, fields } from '../duck/constants';
import validate from './validate';
import onSubmit from './submit';

export const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    onSubmit,
    initialValues: {
        [fields.FULL_NAME]: '',
        [fields.EMAIL]: '',
        [fields.PHONE]: '',
        [fields.CITY]: null,
        [fields.DELIVERY]: null,
        [fields.ADDRESS]: null,
        [fields.PAYMENT]: null
    }
};

export const stepFormConfig = {
    form: FORM_NAME,
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
};
