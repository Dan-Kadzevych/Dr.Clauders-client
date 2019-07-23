import axios from 'axios';

import { registrationRequest, registrationSuccess } from './actions';
import { storeTokenToLC } from './utils';

const registerUser = user => async dispatch => {
    try {
        dispatch(registrationRequest());

        const { data } = await axios.post('api/user', user);

        if (data.error) {
            return {};
        }

        dispatch(registrationSuccess(data.user));
        return storeTokenToLC(data.token);
    } catch (e) {
        return {};
    }
};

export default { registerUser };
