export const storeTokenToLS = token => localStorage.setItem('authToken', token);

export const getTokenFromLS = () => localStorage.getItem('authToken');

export const removeTokenFromLS = () => localStorage.removeItem('authToken');

export const syncCartWithLS = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartFromLS = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart || {};
};
