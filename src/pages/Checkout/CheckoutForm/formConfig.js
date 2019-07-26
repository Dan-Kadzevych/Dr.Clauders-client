import { FORM_NAME } from '../duck/constants';
import validate from './validate';
import onSubmit from './submit';

export const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    onSubmit
};

export const stepFormConfig = {
    form: FORM_NAME,
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
};
