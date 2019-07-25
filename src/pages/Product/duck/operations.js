import { requestProduct, receiveProduct, removeProduct } from './actions';
import { getProduct } from 'utils/requests';
import { getCurrentLocation } from 'duck/selectors';

const fetchProduct = slug => async (dispatch, getState) => {
    try {
        dispatch(requestProduct());

        const { data } = await getProduct({ slug });

        if (slug === getCurrentLocation(getState())) {
            if (data.error) {
                return;
            }
            return dispatch(receiveProduct(data));
        }
    } catch (e) {
        return e;
    }
};

export default { fetchProduct, removeProduct };
