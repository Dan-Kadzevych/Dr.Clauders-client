import axios from 'axios';
import { SubmissionError } from 'redux-form';

import {
    signUpRequest,
    signUpSuccess,
    signInRequest,
    signInSuccess
} from './actions';
import { storeTokenToLC } from 'utils/localStorage';

export const signUp = user => async dispatch => {
    try {
        dispatch(signUpRequest());

        const { data } = await axios.post('/api/user', user);

        dispatch(signUpSuccess(data.user));
        return storeTokenToLC(data.token);
    } catch (e) {
        throw new SubmissionError({ _error: e.response.data.error });
    }
};

export const signIn = credentials => async dispatch => {
    try {
        dispatch(signInRequest());

        const { data } = await axios.post('/api/auth/login', credentials);

        if (data.error) {
            throw new Error(data.error);
        }

        dispatch(signInSuccess(data.user));
        return storeTokenToLC(data.token);
    } catch (e) {
        throw new SubmissionError({ _error: e.response.data.error });
    }
};

export default { signUp, signIn };
