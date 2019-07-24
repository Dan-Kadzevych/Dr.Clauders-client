import createReducer from 'utils/redux/createReducer';

import types from './types';
import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS } from 'pages/Auth/duck/types';

const initialState = {
    user: null
};

const insertUser = (state = {}, { payload: user }) => ({
    ...state,
    user
});

const logout = () => initialState;

const handlers = {
    [SIGN_UP_SUCCESS]: insertUser,
    [SIGN_IN_SUCCESS]: insertUser,
    [types.GET_MY_PROFILE_SUCCESS]: insertUser,
    [types.LOGOUT_SUCCESS]: logout
};

export default createReducer(initialState, handlers);
