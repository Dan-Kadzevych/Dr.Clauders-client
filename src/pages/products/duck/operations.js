import axios from 'axios';

import { requestProducts, receiveProducts, setProductsFilter } from './actions';

const fetchProducts = categoryID => async dispatch => {
    try {
        dispatch(requestProducts());
        const { data } = await axios.get(`/api/product/get_products`, {
            params: {
                categoryID
            }
        });

        return dispatch(receiveProducts(data));
    } catch (e) {
        return e;
    }
};

export default { fetchProducts, setProductsFilter };
