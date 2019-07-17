import { createSelector } from 'reselect';
import get from 'lodash/get';

import { normalizeDeliveryOptions, normalizePaymentOptions } from './utils';

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

export default { getDeliveryOptions, getPaymentOptions, getDeliveryByID };
