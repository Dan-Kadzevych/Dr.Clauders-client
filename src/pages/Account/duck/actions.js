import types from './types';

export const getMyProfileRequest = () => ({
    type: types.GET_MY_PROFILE_REQUEST
});

export const getMyProfileSuccess = user => ({
    type: types.GET_MY_PROFILE_SUCCESS,
    payload: user
});

export const logoutRequest = () => ({
    type: types.LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
});
