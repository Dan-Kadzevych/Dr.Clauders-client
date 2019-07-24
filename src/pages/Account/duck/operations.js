import { push } from 'connected-react-router';

import { getTokenFromLC, removeTokenFromLC } from 'utils/localStorage';
import withToken from 'utils/withToken';
import {
    getMyProfileRequest,
    getMyProfileSuccess,
    logoutRequest,
    logoutSuccess
} from './actions';

const logout = () => async dispatch => {
    try {
        const token = getTokenFromLC();

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

        return removeTokenFromLC();
    } catch (e) {
        return null;
    }
};

export const getMyProfile = () => async dispatch => {
    try {
        const token = getTokenFromLC();

        if (!token) {
            return;
        }

        dispatch(getMyProfileRequest());

        const { data } = await withToken.get('/api/user/me');

        if (data.error) {
            throw new Error();
        }

        return dispatch(getMyProfileSuccess(data.user));
    } catch (e) {
        return null;
    }
};

export default { getMyProfile, logout };
