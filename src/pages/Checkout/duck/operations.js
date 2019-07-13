import axios from 'axios';

export const getCities = search =>
    axios.get('/api/checkout/cities', {
        params: { search }
    });

export default { getCities };
