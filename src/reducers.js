import { combineReducers } from 'redux';

import { productReducer } from './pages/products/duck';

export default combineReducers({
    productsPage: productReducer
});
