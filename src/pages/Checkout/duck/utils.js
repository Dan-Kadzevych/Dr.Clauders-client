import deliveryConfig from '../CheckoutForm/steps/Delivery/deliveryConfig';

import { fields } from './constants';

export const normalizeDeliveryOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name,
        priceDescription: el.deliveryPrice && el.deliveryPrice.description,
        ...deliveryConfig[el.ID]
    }));

export const normalizePaymentOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name
    }));

export const mapUserToInitialValues = user => ({
    [fields.FULL_NAME]: user.name,
    [fields.EMAIL]: user.email,
    [fields.PHONE]: user.phone,
    [fields.CITY]: null,
    [fields.DELIVERY]: null,
    [fields.ADDRESS]: null,
    [fields.PAYMENT]: null
});
