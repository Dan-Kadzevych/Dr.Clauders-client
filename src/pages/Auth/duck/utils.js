import { normalizePhone } from 'utils/phone';

export const normalizeUser = values => ({
    ...values,
    phone: normalizePhone(values.phone)
});
