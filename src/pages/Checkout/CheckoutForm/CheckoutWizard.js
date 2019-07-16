import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import get from 'lodash/get';

import { WizardElement } from 'blocks';
import { _Base } from 'elements';
import { operations, selectors, constants } from '../duck';
import { UserInfo, Delivery, Payment } from './steps';

const formValuesSelector = getFormValues(constants.FORM_NAME);

const mapStateToProps = state => ({
    formValues: formValuesSelector(state) || {},
    deliveryOptions: selectors.getDeliveryOptions(state),
    deliveryByID: selectors.getDeliveryByID(state),
    paymentOptions: selectors.getPaymentOptions(state)
});

const mapDispatchToProps = dispatch => ({
    fetchDelivery(cityID) {
        return dispatch(operations.fetchDeliveryMethods(cityID));
    },
    fetchPayment(deliveryID) {
        return dispatch(operations.fetchPaymentMethods(deliveryID));
    },
    resetOptions(options) {
        return dispatch(operations.resetOptions(options));
    }
});

class CheckoutWizard extends _Base {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    componentWillUnmount() {
        const { resetOptions } = this.props;

        resetOptions(Object.values(constants.options));
    }

    getSteps() {
        const {
            formValues,
            deliveryOptions,
            paymentOptions,
            deliveryByID
        } = this.props;
        const city = get(formValues, 'city.label');
        const delivery = get(deliveryByID, `${[formValues.delivery]}.name`);
        const fullName = get(formValues, `fullName`);
        const email = get(formValues, `email`);
        const phone = get(formValues, `phone`);

        return [
            {
                title: 'User Info',
                body: <UserInfo onSubmit={this.nextStep} />,
                summary: `${fullName}, ${email}, ${phone}`,
                ID: 1
            },
            {
                title: 'Delivery',
                body: (
                    <Delivery
                        city={formValues.city}
                        loadCityOptions={this.getCitiesOptions}
                        deliveryOptions={deliveryOptions}
                        handleCityChange={this.handleCityChange}
                        handleDeliveryChange={this.handleDeliveryChange}
                        onSubmit={this.nextStep}
                    />
                ),
                summary: `${city}, ${delivery}`,
                ID: 2
            },
            {
                title: 'Payment',
                body: <Payment paymentOptions={paymentOptions} />,
                ID: 3
            }
        ];
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 });
    }

    changeStep(n) {
        this.setState({ step: n });
    }

    getCitiesOptions = async value => {
        const { data } = await operations.getCities(value);

        if (data.error) {
            return [];
        }

        return data.map(el => ({ value: el.ID, label: el.text }));
    };

    handleCityChange = ({ value }) => {
        const { fetchDelivery, resetOptions } = this.props;
        const { options, fields } = constants;

        resetOptions(Object.values(options));
        this.props.change(fields.DELIVERY, null);
        this.props.change(fields.PAYMENT, null);

        fetchDelivery(value);
    };

    handleDeliveryChange = e => {
        const { fetchPayment, resetOptions } = this.props;
        const { options, fields } = constants;

        resetOptions(Object.values([options.PAYMENT]));
        this.props.change(fields.PAYMENT, null);

        fetchPayment(e.target.value);
    };

    render() {
        const { step } = this.state;

        return (
            <div>
                {this.getSteps().map(({ title, body, summary, ID }) => (
                    <WizardElement key={ID}>
                        <WizardElement.Badge>
                            {step > ID ? (
                                <WizardElement.CheckedIcon icon="check" />
                            ) : (
                                ID
                            )}
                        </WizardElement.Badge>
                        <WizardElement.Title>{title}</WizardElement.Title>
                        <WizardElement.Line />
                        {step === ID && (
                            <WizardElement.Body>{body}</WizardElement.Body>
                        )}
                        {step > ID && summary && (
                            <WizardElement.Summary>
                                {summary}
                                <WizardElement.Edit
                                    onClick={() => this.changeStep(ID)}
                                >
                                    <WizardElement.EditIcon icon="edit" />
                                    Изменить
                                </WizardElement.Edit>
                            </WizardElement.Summary>
                        )}
                    </WizardElement>
                ))}
            </div>
        );
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(constants.formConfig)
)(CheckoutWizard);
