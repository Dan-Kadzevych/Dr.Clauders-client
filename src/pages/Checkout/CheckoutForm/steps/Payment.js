import React, { PureComponent } from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { RadioGroup } from '../components';
import { stepFormConfig } from '../formConfig';

class Payment extends PureComponent {
    componentWillMount() {
        const { onLoad } = this.props;

        onLoad();
    }

    render() {
        const { handleSubmit, paymentOptions, paymentLoading } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                <Field
                    name="payment"
                    label="Payment Methods"
                    options={paymentOptions}
                    component={RadioGroup}
                    loading={paymentLoading}
                    format={Number}
                />
            </Form>
        );
    }
}

export default reduxForm(stepFormConfig)(Payment);
