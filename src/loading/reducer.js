import { GET_APP_CONFIG } from 'duck/types';
import { GET_MY_PROFILE } from 'pages/Account/duck/types';
import { INIT_CART } from 'pages/Cart/duck/types';

const initialState = {
    [GET_APP_CONFIG]: true,
    [GET_MY_PROFILE]: true,
    [INIT_CART]: true
};

const loadingReducer = (state = initialState, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: requestState === 'REQUEST'
    };
};

export default loadingReducer;
