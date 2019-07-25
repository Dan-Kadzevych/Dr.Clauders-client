import { createErrorSelector } from 'error';

import { SIGN_IN, SIGN_UP } from './types';

const signInErrorSelector = createErrorSelector([SIGN_IN]);
const signUpErrorSelector = createErrorSelector([SIGN_UP]);

export default { signInErrorSelector, signUpErrorSelector };
