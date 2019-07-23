import createReducer from 'utils/redux/createReducer';

import types from './types';

const initialState = {
    user: null
};

const registrationSuccess = (state = {}, { payload: user }) => ({
    ...state,
    user
});

const handlers = {
    [types.REGISTER_SUCCESS]: registrationSuccess
};

export default createReducer(initialState, handlers);
