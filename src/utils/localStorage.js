export const storeTokenToLC = token => localStorage.setItem('authToken', token);

export const getTokenFromLC = () => localStorage.getItem('authToken');

export const removeTokenFromLC = () => localStorage.removeItem('authToken');
