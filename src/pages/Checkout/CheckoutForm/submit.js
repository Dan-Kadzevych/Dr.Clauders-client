import axios from 'axios';

const submit = async values => {
    await axios.get('https://www.liqpay.ua/api/3/checkout', {
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
};

export default submit;
