import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { required } from 'utils/redux/validationRules';
import { RadioGroup } from '../components';
import { stepFormConfig } from '../formConfig';

const Payment = ({ handleSubmit, paymentOptions }) => (
    <Form onSubmit={handleSubmit}>
        <Field
            name="payment"
            label="Payment Methods"
            options={paymentOptions}
            component={RadioGroup}
            format={Number}
            validate={[required]}
        />
    </Form>
);

export default reduxForm(stepFormConfig)(Payment);
