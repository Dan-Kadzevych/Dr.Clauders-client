import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { RadioGroup } from '../components';
import { stepFormConfig } from 'pages/Checkout/duck/constants';

const Payment = ({ handleSubmit, paymentOptions }) => (
    <Form onSubmit={handleSubmit}>
        <Field
            name="payment"
            label="Payment Methods"
            options={paymentOptions}
            component={RadioGroup}
            format={Number}
        />
    </Form>
);

export default reduxForm(stepFormConfig)(Payment);
