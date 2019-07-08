import { GET_APP_CONFIG_REQUEST, GET_APP_CONFIG_SUCCESS } from './types';

const initialState = {
    navConfig: []
};

const appConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP_CONFIG_REQUEST:
            return { ...state };
        case GET_APP_CONFIG_SUCCESS:
            return { ...state, ...action.config };
        default:
            return state;
    }
};

export default appConfigReducer;
