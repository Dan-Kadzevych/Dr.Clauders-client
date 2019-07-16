import types from './types';

export const requestDeliveryMethods = cityID => ({
    type: types.GET_DELIVERY_METHODS_REQUEST,
    payload: cityID
});

export const receiveDeliveryMethods = deliveryMethods => ({
    type: types.GET_DELIVERY_METHODS_SUCCESS,
    payload: deliveryMethods
});

export const requestPaymentMethods = () => ({
    type: types.GET_PAYMENT_METHODS_REQUEST
});

export const receivePaymentMethods = paymentMethods => ({
    type: types.GET_PAYMENT_METHODS_SUCCESS,
    payload: paymentMethods
});

export const resetOptions = options => ({
    type: types.RESET_OPTIONS,
    payload: options
});
