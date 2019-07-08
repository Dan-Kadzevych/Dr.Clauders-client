import types from './types';

export const requestAppConfig = () => ({
    type: types.GET_APP_CONFIG_REQUEST
});

export const receiveAppConfig = config => ({
    type: types.GET_APP_CONFIG_SUCCESS,
    config
});

export default {
    requestAppConfig,
    receiveAppConfig
};
