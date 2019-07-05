import axios from 'axios';

import { getCurrentLocation } from 'utils/redux/location';
import { requestProducts, receiveProducts } from './actions';

const fetchProducts = (categoryID, filter) => async (dispatch, getState) => {
    try {
        dispatch(requestProducts());

        const { data } = await axios.get(`/api/product/get_products`, {
            params: {
                categoryID
            }
        });

        if (data.error) {
            return;
        }

        if (getCurrentLocation(getState()) === filter) {
            return dispatch(receiveProducts(data));
        }
    } catch (e) {
        return e;
    }
};

export default { fetchProducts };
