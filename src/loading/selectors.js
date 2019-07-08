import get from 'lodash/get';

export const createLoadingSelector = actions => state => {
    return actions.some(action => get(state, `loading.${action}`));
};

export default { createLoadingSelector };
