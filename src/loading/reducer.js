import { GET_APP_CONFIG } from 'duck/types';

const initialState = {
    [GET_APP_CONFIG]: true
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
