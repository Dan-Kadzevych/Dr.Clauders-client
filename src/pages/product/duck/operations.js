import axios from 'axios';

import { requestProduct, receiveProduct } from './actions';

const fetchProduct = slug => async dispatch => {
    try {
        dispatch(requestProduct());
        const { data } = await axios.get(`/api/product/get_product`, {
            params: {
                slug
            }
        });

        return dispatch(receiveProduct(data));
    } catch (e) {
        return e;
    }
};

export default { fetchProduct };
