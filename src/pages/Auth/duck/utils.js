import { normalizePhone } from 'utils/phone';

export const normalizeValues = values => ({
    ...values,
    phone: normalizePhone(values.phone)
});
