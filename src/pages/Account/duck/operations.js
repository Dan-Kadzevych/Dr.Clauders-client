import { push } from 'connected-react-router';

import { getTokenFromLS, removeTokenFromLS } from 'utils/localStorage';
import withToken from 'utils/withToken';
import {
    getMyProfileRequest,
    getMyProfileSuccess,
    getMyProfileFailure,
    logoutRequest,
    logoutSuccess
} from './actions';
import { initCart } from 'pages/Cart/duck/operations';

const logout = () => async dispatch => {
    try {
        const token = getTokenFromLS();

        if (!token) {
            return;
        }

        dispatch(logoutRequest());

        const { data } = await withToken.get('/api/auth/logout');

        if (data.error) {
            throw new Error();
        }

        dispatch(logoutSuccess());
        dispatch(push('/'));

        return removeTokenFromLS();
    } catch (e) {
        return null;
    }
};

export const getMyProfile = () => async dispatch => {
    try {
        const token = getTokenFromLS();

        if (!token) {
            throw new Error();
        }

        dispatch(getMyProfileRequest());

        const { data } = await withToken.get('/api/user/me');

        dispatch(getMyProfileSuccess(data.user));
        return dispatch(initCart(data.cart));
    } catch (e) {
        dispatch(getMyProfileFailure(e.message));
        return dispatch(initCart());
    }
};

export default { getMyProfile, logout };
