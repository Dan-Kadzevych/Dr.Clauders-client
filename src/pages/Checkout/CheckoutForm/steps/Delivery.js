import { Field, Form, reduxForm } from 'redux-form';
import React from 'react';

import { required } from 'utils/redux/validationRules';
import { stepFormConfig } from 'pages/Checkout/duck/constants';
import { Select, RadioGroup } from '../components';
import { NextBtn } from '../elements';

const Delivery = ({
    deliveryOptions,
    loadCityOptions,
    loadAddressOptions,
    handleDeliveryChange,
    handleCityChange,
    previousPage,
    handleSubmit,
    city
}) => (
    <Form onSubmit={handleSubmit}>
        <Field
            name="city"
            label="City"
            loadOptions={loadCityOptions}
            component={Select}
            handleChange={handleCityChange}
            validate={required}
        />
        {city && (
            <Field
                name="delivery"
                label="Delivery Methods"
                options={deliveryOptions}
                component={RadioGroup}
                handleChange={handleDeliveryChange}
                loadAddressOptions={loadAddressOptions}
                normalize={Number}
                validate={required}
            />
        )}

        <NextBtn type="submit">Next</NextBtn>
    </Form>
);

export default reduxForm(stepFormConfig)(Delivery);
