import deliveryConfig from '../CheckoutForm/steps/Delivery/deliveryConfig';

export const normalizeDeliveryOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name,
        ...deliveryConfig[el.ID]
    }));

export const normalizePaymentOptions = byID =>
    Object.values(byID).map(el => ({
        value: el.ID,
        label: el.name
    }));
