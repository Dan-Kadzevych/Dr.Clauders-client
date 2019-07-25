import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { productsReducer } from 'pages/Products/duck';
import { productReducer } from 'pages/Product/duck';
import { cartReducer } from 'pages/Cart/duck';
import { checkoutReducer } from 'pages/Checkout/duck';
import { accountReducer } from 'pages/Account/duck';
import { appConfigReducer } from './duck';
import { loadingReducer } from './loading';
import { errorReducer } from './error';

export default history =>
    combineReducers({
        productsPage: productsReducer,
        productPage: productReducer,
        cartPage: cartReducer,
        appConfig: appConfigReducer,
        checkoutPage: checkoutReducer,
        accountPage: accountReducer,
        loading: loadingReducer,
        error: errorReducer,
        form: formReducer,
        router: connectRouter(history)
    });
