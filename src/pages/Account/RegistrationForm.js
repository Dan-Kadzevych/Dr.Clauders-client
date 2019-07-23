import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { SubmitBtn } from 'elements';
import { Input } from 'components';
import { formatPhone, normalizePhone } from 'utils/phone';
import { phonePlaceholder } from 'duck/constants';
import { email, phone, required, password } from 'utils/redux/validationRules';
import { operations } from './duck';
import { color_grey_light } from 'styles/variables';

const FORM_NAME = 'register';
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

const StyledForm = styled(Form)`
    background-color: rgba(168, 168, 168, 0.2);
    padding: 3rem;
    border: 1px solid ${color_grey_light};
    margin: 3rem 0;
`;

const mapDispatchToProps = dispatch => ({
    registerUser(user) {
        return dispatch(operations.registerUser(user));
    }
});

const RegistrationForm = ({ handleSubmit, registerUser }) => (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
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

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(RegistrationForm);
