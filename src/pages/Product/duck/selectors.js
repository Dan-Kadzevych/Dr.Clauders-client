import get from 'lodash/get';

export const getProduct = state => get(state, 'productPage.product');

export default { getProduct };
