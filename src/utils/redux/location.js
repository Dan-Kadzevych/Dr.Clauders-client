import get from 'lodash/get';

export const getCurrentLocation = state =>
    get(state, 'router.location.pathname');
