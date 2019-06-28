import { combineReducers } from 'redux';

import { productsReducer } from './pages/products/duck';
import { productReducer } from './pages/product/duck';
import { appConfigReducer } from './duck';

export default combineReducers({
    productsPage: productsReducer,
    productPage: productReducer,
    appConfig: appConfigReducer
});
