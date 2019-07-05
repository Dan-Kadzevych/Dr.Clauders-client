import axios from 'axios';

export const getProduct = query =>
    axios.get('/api/product/get_product', {
        params: query
    });
