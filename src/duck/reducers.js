import keyBy from 'lodash/keyBy';

import { GET_APP_CONFIG_SUCCESS } from './types';
import {
    ADD_CATEGORY_SUCCESS,
    REMOVE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_SUCCESS
} from 'pages/Admin/duck/types';

const initialState = {
    categoriesByID: {}
};

const appConfigReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REMOVE_CATEGORY_SUCCESS:
        case ADD_CATEGORY_SUCCESS:
        case UPDATE_CATEGORY_SUCCESS:
        case GET_APP_CONFIG_SUCCESS:
            return {
                ...state,
                categoriesByID: keyBy(payload.categories, '_id')
            };
        default:
            return state;
    }
};

export default appConfigReducer;
