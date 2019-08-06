import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { getCartFromLS } from 'utils/localStorage';

import { storeTokenToLS } from 'utils/localStorage';
import {
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    signInRequest,
    signInSuccess,
    signInFailure
} from './actions';
import { initCart } from 'pages/Cart/duck/operations';
import { normalizeUser } from './utils';

export const signUp = values => async dispatch => {
    try {
        dispatch(signUpRequest());

        const user = normalizeUser(values);
        const cart = getCartFromLS();

        const { data } = await axios.post('/api/user', { user, cart });

        dispatch(signUpSuccess(data.user));
        dispatch(initCart(data.cart));
        return storeTokenToLS(data.token);
    } catch (e) {
        dispatch(signUpFailure(e.message));
        throw new SubmissionError({ _error: e.response.data.error });
    }
};

export const signIn = credentials => async dispatch => {
    try {
        dispatch(signInRequest());
        const cart = getCartFromLS();

        const { data } = await axios.post('/api/auth/login', {
            credentials,
            cart
        });

        if (data.error) {
            throw new Error(data.error);
        }

        dispatch(signInSuccess(data.user));
        dispatch(initCart(data.cart));
        return storeTokenToLS(data.token);
    } catch (e) {
        dispatch(signInFailure(e.message));
        throw new SubmissionError({ _error: e.response.data.error });
    }
};

export default { signUp, signIn };
