import get from 'lodash/get';

import { createLoadingSelector } from 'loading';
import { GET_PRODUCT } from './types';

export const getProduct = state => get(state, 'productPage.product');
export const isProductLoading = createLoadingSelector([GET_PRODUCT]);

export default { getProduct, isProductLoading };
