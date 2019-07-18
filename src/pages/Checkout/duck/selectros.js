import { createSelector } from 'reselect';
import { getFormSyncErrors } from 'redux-form';
import get from 'lodash/get';

import { normalizeDeliveryOptions, normalizePaymentOptions } from './utils';
import { FORM_NAME } from './constants';

const getCheckoutErrors = getFormSyncErrors(FORM_NAME);

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

export default {
    getDeliveryOptions,
    getPaymentOptions,
    getDeliveryByID,
    getIsFormValid
};
