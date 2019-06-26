import { REQUEST_APP_CONFIG, RECEIVE_APP_CONFIG } from './types';

const initialState = {
    isLoading: false,
    navConfig: []
};

const appConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_APP_CONFIG:
            return { ...state, isLoading: true };
        case RECEIVE_APP_CONFIG:
            return { ...state, ...action.config, isLoading: false };
        default:
            return state;
    }
};

export default appConfigReducer;
