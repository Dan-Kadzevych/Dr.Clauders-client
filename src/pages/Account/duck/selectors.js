import get from 'lodash/get';

export const getIsAuthorized = state => !!get(state, 'accountPage.user');

export default { getIsAuthorized };
