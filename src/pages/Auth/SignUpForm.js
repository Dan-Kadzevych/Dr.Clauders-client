import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { SubmitBtn, _Base } from 'elements';
import { Input } from 'components';
import { formatPhone, normalizePhone } from 'utils/phone';
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

class SignUpForm extends _Base {
    render() {
        const { handleSubmit } = this.props;

        return (
            <StyledForm onSubmit={handleSubmit}>
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
                    type="text"
                    name="phone"
                    label="Phone Number"
                    placeholder={phonePlaceholder}
                    component={Input}
                    format={formatPhone}
                    normalize={normalizePhone}
                    validate={[phone, required]}
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
    }
}

export default reduxForm(formConfig)(SignUpForm);
