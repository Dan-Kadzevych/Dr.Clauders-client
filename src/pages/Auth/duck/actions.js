import types from './types';

export const signUpRequest = () => ({
    type: types.SIGN_UP_REQUEST
});

export const signUpSuccess = user => ({
    type: types.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = error => ({
    type: types.SIGN_UP_FAILURE,
    payload: { error }
});

export const signInRequest = () => ({
    type: types.SIGN_IN_REQUEST
});

export const signInSuccess = user => ({
    type: types.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: types.SIGN_IN_FAILURE,
    payload: { error }
});
