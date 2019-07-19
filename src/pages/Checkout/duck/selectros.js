import { createSelector } from 'reselect';
import { getFormSyncErrors, formValueSelector } from 'redux-form';
import get from 'lodash/get';

import { createLoadingSelector } from 'loading';
import { getCartSummary } from 'pages/Cart/duck/selectors';
import { normalizeDeliveryOptions, normalizePaymentOptions } from './utils';
import { GET_DELIVERY_METHODS, GET_PAYMENT_METHODS } from './types';
import { FORM_NAME, fields } from './constants';

const isDeliveryLoading = createLoadingSelector([GET_DELIVERY_METHODS]);
const isPaymentLoading = createLoadingSelector([GET_PAYMENT_METHODS]);

const getCheckoutErrors = getFormSyncErrors(FORM_NAME);
const getDeliveryID = state =>
    formValueSelector(FORM_NAME)(state, fields.DELIVERY);

const emptyObj = {};

const getDeliveryByID = state =>
    get(state, 'checkoutPage.delivery.byID', emptyObj);
const getPaymentByID = state =>
    get(state, 'checkoutPage.payment.byID', emptyObj);

const getDeliveryOptions = createSelector(
    getDeliveryByID,
    byID => normalizeDeliveryOptions(byID)
);

const getPaymentOptions = createSelector(
    getPaymentByID,
    byID => normalizePaymentOptions(byID)
);

export const getIsFormValid = createSelector(
    getCheckoutErrors,
    errors => !Object.keys(errors).length
);

export const getDeliveryPrice = createSelector(
    [getDeliveryByID, getDeliveryID],
    (byID, deliveryID) =>
        get(byID[deliveryID], 'deliveryPrice', { price: 0, description: '' })
);

export const getTotalPrice = createSelector(
    [getDeliveryPrice, getCartSummary],
    (deliveryPrice, cartSummary) => cartSummary.price + deliveryPrice.price
);

export const getDeliveryPriceDescription = createSelector(
    [getDeliveryPrice],
    deliveryPrice => get(deliveryPrice, 'description')
);

export default {
    getDeliveryOptions,
    getPaymentOptions,
    getDeliveryByID,
    getPaymentByID,
    getIsFormValid,
    isDeliveryLoading,
    isPaymentLoading,
    getTotalPrice,
    getDeliveryPriceDescription
};
