import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { SubmitBtn, GlobalError } from 'elements';
import { Input } from 'components';
import { phonePlaceholder } from 'duck/constants';
import { email, phone, required, password } from 'utils/redux/validationRules';
import { StyledForm } from './elements';

const FORM_NAME = 'signup';
const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    initialValues: {
        name: '',
        email: '',
        phone: '',
        password: null
    }
};

const SignUpForm = ({ handleSubmit, error }) => (
    <StyledForm onSubmit={handleSubmit}>
        {error && <GlobalError>{error}</GlobalError>}
        <Field
            type="text"
            name="name"
            label="Full Name"
            component={Input}
            validate={[required]}
        />
        <Field
            type="email"
            name="email"
            label="Email"
            component={Input}
            validate={[email, required]}
        />
        <Field
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder={phonePlaceholder}
            component={Input}
            validate={[phone, required]}
            mask="phone"
        />
        <Field
            type="password"
            name="password"
            label="Password"
            component={Input}
            validate={[password, required]}
        />
        <SubmitBtn>Register</SubmitBtn>
    </StyledForm>
);

export default reduxForm(formConfig)(SignUpForm);
