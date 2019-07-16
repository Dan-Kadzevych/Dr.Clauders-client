import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { productsReducer } from 'pages/Products/duck';
import { productReducer } from 'pages/Product/duck';
import { cartReducer } from 'pages/Cart/duck';
import { appConfigReducer } from './duck';
import { checkoutReducer } from './pages/Checkout/duck';
import { loadingReducer } from './loading';

export default history =>
    combineReducers({
        productsPage: productsReducer,
        productPage: productReducer,
        cartPage: cartReducer,
        appConfig: appConfigReducer,
        checkoutPage: checkoutReducer,
        loading: loadingReducer,
        form: formReducer,
        router: connectRouter(history)
    });
