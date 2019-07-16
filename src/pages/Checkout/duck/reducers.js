import createReducer from 'utils/redux/createReducer';
import { formatByID } from 'utils/redux/helpers';
import pick from 'lodash/pick';

import types from './types';

const initialState = {
    delivery: {
        byID: {},
        allIDs: []
    },
    payment: {
        byID: {},
        allIDs: []
    }
};

const getDeliveryMethodsSuccess = (
    state = {},
    { payload: deliveryMethods }
) => {
    const delivery = formatByID(deliveryMethods, 'ID');

    return { ...state, delivery };
};

const getPaymentMethodsSuccess = (state = {}, { payload: paymentMethods }) => {
    const payment = formatByID(paymentMethods, 'ID');

    return { ...state, payment };
};

const resetOptions = (state = {}, { payload: options }) => ({
    ...state,
    ...pick(initialState, options)
});

const handlers = {
    [types.GET_DELIVERY_METHODS_SUCCESS]: getDeliveryMethodsSuccess,
    [types.GET_PAYMENT_METHODS_SUCCESS]: getPaymentMethodsSuccess,
    [types.RESET_OPTIONS]: resetOptions
};

export default createReducer(initialState, handlers);
