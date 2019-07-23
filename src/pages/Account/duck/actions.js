import types from './types';

export const registrationRequest = () => ({
    type: types.REGISTER_REQUEST
});

export const registrationSuccess = user => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});
