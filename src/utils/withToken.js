import axios from 'axios';

import { getTokenFromLS } from 'utils/localStorage';

const withToken = axios.create({ method: 'get' });

withToken.interceptors.request.use(config => {
    const token = getTokenFromLS();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default withToken;
