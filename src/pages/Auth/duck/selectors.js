import { createLoadingSelector } from 'loading';

import { SIGN_IN, SIGN_UP } from './types';

const signInLoadingSelector = createLoadingSelector([SIGN_IN]);
const signUpLoadingSelector = createLoadingSelector([SIGN_UP]);

export default { signInLoadingSelector, signUpLoadingSelector };
