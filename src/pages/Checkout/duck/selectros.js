import { createSelector } from 'reselect';
import get from 'lodash/get';

import { normalizeDeliveryOptions } from './utils';

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
    byID => normalizeDeliveryOptions(byID)
);

export default { getDeliveryOptions, getPaymentOptions };
