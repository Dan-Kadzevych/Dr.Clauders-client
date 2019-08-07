import getFp from 'lodash/fp/get';

export const getErrorMessage = getFp('response.data.error');
