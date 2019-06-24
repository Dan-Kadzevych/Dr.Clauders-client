import { requestProducts, receiveProducts, setProductsFilter } from './actions';

const fetchProducts = () => {
    return async dispatch => {
        try {
            dispatch(requestProducts());
            const response = await fetch('/api/get_products');
            const products = await response.json();
            return dispatch(receiveProducts(products));
        } catch (e) {
            return e;
        }
    };
};

export default { fetchProducts, setProductsFilter };
