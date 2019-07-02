import axios from 'axios';

import {
    addToCartRequest,
    addToCartSuccess,
    removeFromCart,
    requestCartProducts,
    receiveCartProducts
} from './actions';

export const fetchCartProducts = productIDs => async dispatch => {
    try {
        dispatch(requestCartProducts());
        const { data } = await axios.get('/api/get_cart_products', {
            params: {
                productIDs
            }
        });

        return dispatch(receiveCartProducts(data));
    } catch (e) {
        return e;
    }
};

export const addToCart = (productID, quantity = 1) => dispatch => {
    try {
        dispatch(addToCartRequest(productID));

        return dispatch(addToCartSuccess(productID, quantity));
    } catch (e) {
        return e;
    }
};

export default { fetchCartProducts, addToCart, removeFromCart };
