import axios from 'axios';

import actions, { removeProduct } from './actions';
import { getCurrentLocation } from 'duck/selectors';

const fetchProduct = url => async (dispatch, getState) => {
    try {
        dispatch(actions.getProductRequest());
        const slug = url.replace('/products/', '');

        const { data } = await axios.get(`/api/product/get_product/${slug}`);

        if (url === getCurrentLocation(getState())) {
            return dispatch(actions.getProductSuccess(data));
        }
    } catch (e) {
        return dispatch(actions.getProductFailure(e.message));
    }
};

export default { fetchProduct, removeProduct };
