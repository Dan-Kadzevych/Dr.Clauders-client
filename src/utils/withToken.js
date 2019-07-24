import axios from 'axios';

import { getTokenFromLC } from 'utils/localStorage';

const withToken = axios.create({ method: 'get' });

withToken.interceptors.request.use(config => {
    const token = getTokenFromLC();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default withToken;
