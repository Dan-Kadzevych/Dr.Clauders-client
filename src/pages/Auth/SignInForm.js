import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { SubmitBtn, GlobalError } from 'elements';
import { Input } from 'components';
import { email, required, password } from 'utils/redux/validationRules';
import { StyledForm } from './elements';

const FORM_NAME = 'signin';
const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    initialValues: {
        email: '',
        password: null
    }
};

const SignInForm = ({ handleSubmit, error }) => (
    <StyledForm onSubmit={handleSubmit}>
        {error && <GlobalError source={error} />}
        <Field
            type="email"
            name="email"
            label="Email"
            component={Input}
            validate={[email, required]}
        />
        <Field
            type="password"
            name="password"
            label="Password"
            component={Input}
            validate={[password, required]}
        />
        <SubmitBtn>Sing in</SubmitBtn>
    </StyledForm>
);

export default reduxForm(formConfig)(SignInForm);
