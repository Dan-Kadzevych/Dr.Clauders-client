import { requestProduct, receiveProduct } from './actions';
import { getProduct } from 'utils/requests';
import { getCurrentLocation } from 'utils/redux/location';

const fetchProduct = slug => async (dispatch, getState) => {
    try {
        dispatch(requestProduct());
        const { data } = await getProduct({ slug });

        if (slug === getCurrentLocation(getState())) {
            return dispatch(receiveProduct(data));
        }
    } catch (e) {
        return e;
    }
};

export default { fetchProduct };
