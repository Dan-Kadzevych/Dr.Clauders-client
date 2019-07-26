import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormValues, getFormSyncErrors } from 'redux-form';
import get from 'lodash/get';

import { WizardElement } from 'blocks';
import { _Base } from 'elements';
import { operations, selectors, constants } from '../duck';
import { formConfig } from './formConfig';
import { UserInfo, Delivery, Payment } from './steps';

const formValuesSelector = getFormValues(constants.FORM_NAME);
const formSyncErrorsSelector = getFormSyncErrors(constants.FORM_NAME);

const mapStateToProps = state => ({
    formValues: formValuesSelector(state) || {},
    formErrors: formSyncErrorsSelector(state) || {},
    deliveryOptions: selectors.getDeliveryOptions(state),
    deliveryByID: selectors.getDeliveryByID(state),
    paymentByID: selectors.getPaymentByID(state),
    paymentOptions: selectors.getPaymentOptions(state),
    deliveryLoading: selectors.isDeliveryLoading(state),
    paymentLoading: selectors.isPaymentLoading(state),
    initialValues: selectors.getInitialValues(state)
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
            step: constants.stepIDs[constants.steps.USER_INFO]
        };

        this.addressRequestConfig = {
            1: this.getDepartmentOptions,
            2: this.getStreetOptions
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
            deliveryByID,
            paymentByID,
            deliveryLoading,
            paymentLoading
        } = this.props;
        const { stepIDs, steps } = constants;
        const { fullName, email, phone, delivery, city, payment } = formValues;
        const deliveryName = get(deliveryByID, `${delivery}.name`);
        const paymentName = get(paymentByID, `${payment}.name`);
        const cityName = get(city, `label`);

        return [
            {
                title: 'User Info',
                body: (
                    <UserInfo
                        onSubmit={() =>
                            this.changeStep(stepIDs[steps.DELIVERY])
                        }
                    />
                ),
                completed: this.isStepCompleted(stepIDs[steps.USER_INFO]),
                summary: `${fullName}, ${email}, ${phone}`,
                ID: stepIDs[steps.USER_INFO]
            },
            {
                title: 'Delivery',
                body: (
                    <Delivery
                        city={formValues.city}
                        loadCityOptions={this.getCitiesOptions}
                        deliveryOptions={deliveryOptions}
                        deliveryLoading={deliveryLoading}
                        loadAddressOptions={this.getAddressOptions}
                        handleCityChange={this.handleCityChange}
                        handleDeliveryChange={this.handleDeliveryChange}
                        onSubmit={() => this.changeStep(stepIDs[steps.PAYMENT])}
                    />
                ),
                completed: this.isStepCompleted(stepIDs[steps.DELIVERY]),
                summary: `${cityName}, ${deliveryName}`,
                ID: stepIDs[steps.DELIVERY]
            },
            {
                title: 'Payment',
                body: (
                    <Payment
                        paymentLoading={paymentLoading}
                        onLoad={this.onPaymentsLoad}
                        paymentOptions={paymentOptions}
                    />
                ),
                completed: this.isStepCompleted(stepIDs[steps.PAYMENT]),
                summary: paymentName,
                ID: stepIDs[steps.PAYMENT]
            }
        ];
    }

    changeStep(n) {
        this.setState({ step: n });
    }

    getCitiesOptions = async value => {
        const { data } = await operations.getCities(value);

        if (data.error) {
            return [];
        }

        return data.map(el => ({ value: el.ID, label: el.name }));
    };

    getAddressOptions = async value => {
        const { formValues } = this.props;
        const deliveryID = get(formValues, constants.fields.DELIVERY);

        if (!this.addressRequestConfig[deliveryID]) {
            return [];
        }

        return await this.addressRequestConfig[deliveryID](value);
    };

    getDepartmentOptions = async value => {
        const { formValues } = this.props;
        const cityID = get(formValues, `${constants.fields.CITY}.value`);
        const deliveryID = get(formValues, constants.fields.DELIVERY);

        const { data } = await operations.getDepartments({
            cityID,
            deliveryID,
            search: value
        });

        if (data.error) {
            return [];
        }

        return data.map(({ ID, name, schedule, phone }) => ({
            value: ID,
            label: name,
            phone: phone,
            schedule: schedule
        }));
    };

    getStreetOptions = async value => {
        const { formValues } = this.props;
        const cityID = get(formValues, 'city.value');

        const { data } = await operations.getStreets({
            cityID,
            search: value
        });

        if (data.error) {
            return [];
        }

        return data.map(el => ({
            value: el.name,
            label: el.name
        }));
    };

    handleCityChange = option => {
        const { fetchDelivery, resetOptions, change } = this.props;
        const { options, fields } = constants;
        const value = get(option, 'value');

        this.clearFields([fields.DELIVERY, fields.ADDRESS, fields.PAYMENT]);
        this.untouchAddressFields();

        resetOptions(Object.values(options));

        if (value) {
            change(fields.DELIVERY, 1);
            fetchDelivery(value);
        }
    };

    handleDeliveryChange = () => {
        const { resetOptions } = this.props;
        const { options, fields } = constants;

        this.clearFields([fields.ADDRESS, fields.PAYMENT]);

        this.untouchAddressFields();

        resetOptions(Object.values([options.PAYMENT]));
    };

    onPaymentsLoad = () => {
        const { fetchPayment, formValues, change } = this.props;
        const { fields } = constants;

        if (!formValues[fields.PAYMENT]) {
            change(fields.PAYMENT, 1);
        }

        fetchPayment(formValues[fields.DELIVERY]);
    };

    untouchAddressFields = () => {
        const { untouch } = this.props;
        const { fields } = constants;

        untouch(
            `${fields.ADDRESS}.department`,
            `${fields.ADDRESS}.street`,
            `${fields.ADDRESS}.house`,
            `${fields.ADDRESS}.apartment`
        );
    };

    clearFields = fields => {
        const { change } = this.props;
        fields.forEach(filed => change(filed, null));
    };

    isStepCompleted = ID => {
        const { formErrors } = this.props;

        return !Object.keys(formErrors).some(key =>
            constants.stepFields[ID].includes(key)
        );
    };

    render() {
        const { step } = this.state;

        return (
            <div>
                {this.getSteps().map(
                    ({ title, body, summary, ID, completed }) => (
                        <WizardElement key={ID}>
                            <WizardElement.Badge>
                                {completed ? (
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
                            {completed && step > ID && (
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
                    )
                )}
            </div>
        );
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CheckoutWizard);
