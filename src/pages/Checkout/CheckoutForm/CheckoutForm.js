import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { _Base, H3 } from 'elements';
import { required, cyrillic, email, phone } from 'utils/redux/validationRules';
import { formatPhone } from 'utils/phone';
import { operations } from '../duck';
import VirtualizedSelect from './VirtualizedSelect';
import { font_quaternary } from 'styles/variables';

const FORM_NAME = 'checkout';
const formConfig = {
    form: FORM_NAME,
    initialValues: {
        fullName: '',
        email: '',
        phone: '',
        city: null
    },
    enableReinitialize: true
};

const Title = styled(H3)`
    font-size: 2.6rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    margin-bottom: 6px;
`;

const InputLabel = styled.div`
    line-height: 1.9rem;

    ${font_quaternary};
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const Input = styled.input`
    line-height: 2.8rem;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: 1.2rem 1.5rem;
    border: 1px solid rgba(0, 0, 0, 0.13);

    :focus {
        outline: none;
    }
`;

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class CheckoutForm extends _Base {
    renderInput = ({ input, type, label, meta, placeholder }) => (
        <InputContainer>
            <InputLabel> {label} </InputLabel>
            <Input {...input} placeholder={placeholder} type={type} />
        </InputContainer>
    );

    renderSelect({ input, label, meta }) {
        return (
            <div>
                <InputLabel> {label} </InputLabel>
                <VirtualizedSelect
                    input={input}
                    loadOptions={this.getCitiesOptions}
                />
            </div>
        );
    }

    getCitiesOptions = async value => {
        const { data } = await operations.getCities(value);

        if (data.error) {
            return [];
        }

        return data.map(el => ({ value: el.ID, label: el.text }));
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                <div>
                    <Title>User Info</Title>
                    <Field
                        type="text"
                        name="fullName"
                        label="Full Name"
                        component={this.renderInput}
                        validate={[required, cyrillic]}
                    />
                    <Field
                        type="email"
                        name="email"
                        label="Email"
                        component={this.renderInput}
                        validate={[required, email]}
                    />
                    <Field
                        type="text"
                        name="phone"
                        label="Phone Number"
                        placeholder="+38 (0__) ___-__-__"
                        component={this.renderInput}
                        validate={[required, phone]}
                        format={formatPhone}
                    />
                </div>
                <div>
                    <Title>Delivery</Title>
                    <Field
                        name="city"
                        label="City"
                        cacheOptions
                        defaultOptions
                        loadOptions={this.loadOptions}
                        component={this.renderSelect}
                    />
                </div>
            </Form>
        );
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CheckoutForm);
