import types from './types';

export const signUpRequest = () => ({
    type: types.SIGN_UP_REQUEST
});

export const signUpSuccess = user => ({
    type: types.SIGN_UP_SUCCESS,
    payload: user
});

export const signInRequest = () => ({
    type: types.SIGN_UP_REQUEST
});

export const signInSuccess = user => ({
    type: types.SIGN_UP_SUCCESS,
    payload: user
});
