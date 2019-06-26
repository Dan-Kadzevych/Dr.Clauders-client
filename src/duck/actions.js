import types from './types';

export const requestAppConfig = () => ({
    type: types.REQUEST_APP_CONFIG
});

export const receiveAppConfig = config => ({
    type: types.RECEIVE_APP_CONFIG,
    config
});

export default {
    requestAppConfig,
    receiveAppConfig
};
