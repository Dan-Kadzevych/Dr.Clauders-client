import pick from 'lodash/pick';
import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import difference from 'lodash/difference';

import { findKeys } from 'utils/helpers';
import { minValue } from 'utils/redux/validationRules';
import { CART_FIELDS } from './constants';

export const minValue0 = minValue(0);

export const syncCartWithLc = cart => {
    const cartToStore = JSON.stringify(pick(cart, CART_FIELDS));
    localStorage.setItem('cart', cartToStore);
};

export const getCartFromLc = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || {};
};

export const getTotalPrice = (price, quantity) =>
    quantity > 0 ? quantity * price : 0;

export const normalizeValue = value => (Array.isArray(value) ? value : [value]);
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
