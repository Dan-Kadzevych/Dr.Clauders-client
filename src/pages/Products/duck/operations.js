import axios from 'axios';

import { getCurrentLocation } from 'duck/selectors';
import actions from './actions';

export const fetchProducts = (filter, params = {}) => async (
    dispatch,
    getState
) => {
    try {
        dispatch(actions.getProductsRequest());
        let url = '/api/product/get_products';

        if (params.categoryID) {
            url = `${url}/${params.categoryID}`;
        }

        const { data } = await axios.get(url);

        if (getCurrentLocation(getState()) === filter) {
            return dispatch(actions.getProductsSuccess(data));
        }
    } catch (e) {
        return dispatch(actions.getProductsFailure(e.message));
    }
};

export default { fetchProducts };
