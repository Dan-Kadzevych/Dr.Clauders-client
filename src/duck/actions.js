import types from './types';

export const getAppConfigRequest = () => ({
    type: types.GET_APP_CONFIG_REQUEST
});

export const getAppConfigSuccess = ({ categories }) => ({
    type: types.GET_APP_CONFIG_SUCCESS,
    payload: { categories }
});

export const getAppConfigFailure = error => ({
    type: types.GET_APP_CONFIG_FAILURE,
    payload: { error }
});

export default {
    getAppConfigRequest,
    getAppConfigSuccess,
    getAppConfigFailure
};
