import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { cyrillic, email, phone, required } from 'utils/redux/validationRules';
import { formatPhone } from 'utils/phone';
import { Input } from '../components';
import { NextBtn } from '../elements';
import { stepFormConfig } from 'pages/Checkout/duck/constants';

const UserInfo = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Field
            type="text"
            name="fullName"
            label="Full Name"
            component={Input}
            validate={[required, cyrillic]}
        />
        <Field
            type="email"
            name="email"
            label="Email"
            component={Input}
            validate={[required, email]}
        />
        <Field
            type="text"
            name="phone"
            label="Phone Number"
            placeholder="+38 (0__) ___-__-__"
            component={Input}
            validate={[required, phone]}
            format={formatPhone}
        />
        <NextBtn type="submit">Next</NextBtn>
    </Form>
);

export default reduxForm(stepFormConfig)(UserInfo);
