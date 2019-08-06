import axios from 'axios';

import actions from './actions';

export const fetchAppConfig = () => async dispatch => {
    try {
        dispatch(actions.getAppConfigRequest());
        const { data } = await axios.get('/api/app/get_config');

        dispatch(actions.getAppConfigSuccess(data));
    } catch (e) {
        dispatch(actions.getAppConfigFailure(e.message));
    }
};

export default {
    fetchAppConfig
};
