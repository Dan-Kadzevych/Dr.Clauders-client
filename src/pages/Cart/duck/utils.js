import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import difference from 'lodash/difference';
import uniq from 'lodash/uniq';
import compact from 'lodash/compact';

import { findKeys } from 'utils/helpers';
import { minValue } from 'utils/redux/validationRules';

export const minValue0 = minValue(0);

export const getTotalPrice = (price, quantity) =>
    quantity > 0 ? quantity * price : 0;

export const normalizeProductIDs = value =>
    Array.isArray(value) ? value : [value];

export const normalizeFormValues = values => mapValues(values, Number);

export const getNewCart = (productIDs, products, formValues) => {
    const quantityByID = normalizeFormValues(formValues);
    const IDsToRemove = findKeys(quantityByID, val => val <= 0);

    if (IDsToRemove.length) {
        const newProducts = IDsToRemove.length
            ? products.filter(el => !IDsToRemove.includes(el._id))
            : products;
        const newQuantityByID = omit(quantityByID, IDsToRemove);
        const newProductIDs = difference(productIDs, IDsToRemove);

        return {
            productIDs: newProductIDs,
            products: newProducts,
            quantityByID: newQuantityByID
        };
    }

    return { quantityByID, productIDs, products };
};

export const normalizeCart = cart => {
    const normalizedCart = {};

    normalizedCart.productIDs = uniq(compact(cart.productIDs));
    normalizedCart.quantityByID = pick(
        cart.quantityByID,
        normalizedCart.productIDs
    );

    return normalizedCart;
};
