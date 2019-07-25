import get from 'lodash/get';
import compact from 'lodash/compact';
import head from 'lodash/head';

export const createErrorSelector = actions => state => {
    return head(compact(actions.map(action => get(state, `error.${action}`))));
};

export default createErrorSelector;
