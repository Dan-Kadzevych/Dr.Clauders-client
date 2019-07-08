import axios from 'axios';

import { getCurrentLocation } from 'duck/selectors';
import { requestProducts, receiveProducts } from './actions';

const fetchProducts = (categoryID, filter) => async (dispatch, getState) => {
    try {
        dispatch(requestProducts());

        const { data } = await axios.get(`/api/product/get_products`, {
            params: {
                categoryID
            }
        });

        if (getCurrentLocation(getState()) === filter) {
            if (data.error) {
                return;
            }

            return dispatch(receiveProducts(data));
        }
    } catch (e) {
        return e;
    }
};

export default { fetchProducts };
