import { Field, Form, reduxForm } from 'redux-form';
import React from 'react';

import { required } from 'utils/redux/validationRules';
import { SubmitBtn } from 'elements';
import { stepFormConfig } from '../../formConfig';
import { Select, RadioGroup } from '../../components/index';

const Delivery = ({
    deliveryLoading,
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
            placeholder="Выберите город"
        />
        {city && (
            <Field
                name="delivery"
                label="Delivery Methods"
                options={deliveryOptions}
                loading={deliveryLoading}
                component={RadioGroup}
                handleChange={handleDeliveryChange}
                loadAddressOptions={loadAddressOptions}
                normalize={Number}
                validate={required}
            />
        )}

        <SubmitBtn type="submit">Next</SubmitBtn>
    </Form>
);

export default reduxForm(stepFormConfig)(Delivery);
