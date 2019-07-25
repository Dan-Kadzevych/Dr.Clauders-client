import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { phonePlaceholder } from 'duck/constants';
import { Input } from 'components';
import { SubmitBtn } from 'elements';
import { stepFormConfig } from '../formConfig';

const UserInfo = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit} noValidate>
        <Field type="text" name="name" label="Full Name" component={Input} />
        <Field type="email" name="email" label="Email" component={Input} />
        <Field
            type="text"
            name="phone"
            label="Phone Number"
            placeholder={phonePlaceholder}
            component={Input}
            mask="phone"
        />
        <SubmitBtn type="submit">Next</SubmitBtn>
    </Form>
);

export default reduxForm(stepFormConfig)(UserInfo);
