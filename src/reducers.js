import { combineReducers } from 'redux';

import { productReducer } from './pages/products/duck';
import { appConfigReducer } from './duck';

export default combineReducers({
    productsPage: productReducer,
    appConfig: appConfigReducer
});
