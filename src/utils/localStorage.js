import pick from 'lodash/pick';
import { CART_FIELDS_TO_STORE } from 'pages/Cart/duck/constants';

export const storeTokenToLC = token => localStorage.setItem('authToken', token);

export const getTokenFromLC = () => localStorage.getItem('authToken');

export const removeTokenFromLC = () => localStorage.removeItem('authToken');

export const syncCartWithLc = cart => {
    const cartToStore = JSON.stringify(pick(cart, CART_FIELDS_TO_STORE));
    localStorage.setItem('cart', cartToStore);
};

export const getCartFromLc = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || {};
};
