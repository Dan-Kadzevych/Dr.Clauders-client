import createReducer from 'utils/redux/createReducer';

import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS } from 'pages/Auth/duck/types';
import types from './types';
import { normalizeUser } from './utils';

const initialState = {
    user: null
};

const insertUser = (state = {}, { payload: user }) => {
    const normalizedUser = normalizeUser(user);

    return {
        ...state,
        user: normalizedUser
    };
};

const logout = () => initialState;

const handlers = {
    [SIGN_UP_SUCCESS]: insertUser,
    [SIGN_IN_SUCCESS]: insertUser,
    [types.GET_MY_PROFILE_SUCCESS]: insertUser,
    [types.LOGOUT_SUCCESS]: logout
};

export default createReducer(initialState, handlers);
