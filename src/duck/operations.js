import axios from 'axios';

import actions from './actions';

export const fetchAppConfig = () => async dispatch => {
    try {
        dispatch(actions.requestAppConfig());
        const { data } = await axios.get('/api/app/get_config');

        dispatch(actions.receiveAppConfig(data));
    } catch (e) {
        return e;
    }
};

export default {
    fetchAppConfig
};
