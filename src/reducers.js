import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { productsReducer } from './pages/products/duck';
import { productReducer } from './pages/product/duck';
import { cartReducer } from './pages/cart/duck';
import { appConfigReducer } from './duck';

export default combineReducers({
    productsPage: productsReducer,
    productPage: productReducer,
    cartPage: cartReducer,
    appConfig: appConfigReducer,
    form: formReducer
});
