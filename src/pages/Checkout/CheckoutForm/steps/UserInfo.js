import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { formatPhone } from 'utils/phone';
import { Input } from '../components';
import { NextBtn } from '../elements';
import { stepFormConfig } from '../formConfig';

const UserInfo = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit} noValidate>
        <Field
            type="text"
            name="fullName"
            label="Full Name"
            component={Input}
        />
        <Field type="email" name="email" label="Email" component={Input} />
        <Field
            type="text"
            name="phone"
            label="Phone Number"
            placeholder="+38 (0__) ___-__-__"
            component={Input}
            format={formatPhone}
        />
        <NextBtn type="submit">Next</NextBtn>
    </Form>
);

export default reduxForm(stepFormConfig)(UserInfo);
