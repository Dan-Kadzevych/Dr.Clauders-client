import keyBy from 'lodash/keyBy';

import { GET_APP_CONFIG_SUCCESS } from './types';

const initialState = {
    categoriesByID: {}
};

const appConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP_CONFIG_SUCCESS:
            return {
                ...state,
                categoriesByID: keyBy(action.config.categories, '_id')
            };
        default:
            return state;
    }
};

export default appConfigReducer;
