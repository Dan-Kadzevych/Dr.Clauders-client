import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import difference from 'lodash/difference';

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
