import axios from 'axios';

import {
    requestDeliveryMethods,
    receiveDeliveryMethods,
    requestPaymentMethods,
    receivePaymentMethods,
    resetOptions
} from './actions';

const getCities = search =>
    axios.get('/api/checkout/cities', {
        params: { search }
    });

const getDepartments = params =>
    axios.get('/api/checkout/departments', {
        params
    });

const getStreets = params =>
    axios.get('/api/checkout/streets', {
        params
    });

const fetchDeliveryMethods = cityID => async dispatch => {
    try {
        dispatch(requestDeliveryMethods());

        const { data } = await axios.get('/api/checkout/delivery', {
            params: { cityID }
        });

        if (data.error) {
            return [];
        }

        return dispatch(receiveDeliveryMethods(data));
    } catch (e) {
        return [];
    }
};

const fetchPaymentMethods = ID => async dispatch => {
    try {
        dispatch(requestPaymentMethods());

        const { data } = await axios.get('/api/checkout/payment', {
            params: { ID }
        });

        if (data.error) {
            return [];
        }

        return dispatch(receivePaymentMethods(data));
    } catch (e) {
        return [];
    }
};

export default {
    getCities,
    getDepartments,
    getStreets,
    fetchDeliveryMethods,
    fetchPaymentMethods,
    resetOptions
};
