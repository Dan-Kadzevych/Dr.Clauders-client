import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import get from 'lodash/get';

import { WizardElement } from 'blocks';
import { _Base } from 'elements';
import { operations, selectors, constants } from '../duck';
import { formConfig } from './formConfig';
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
        const { fullName, email, phone, delivery, city } = formValues;
        const deliveryName = get(deliveryByID, `${[delivery]}.name`);
        const cityName = get(city, `label`);

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
                        loadAddressOptions={this.getAddressOptions}
                        handleCityChange={this.handleCityChange}
                        handleDeliveryChange={this.handleDeliveryChange}
                        onSubmit={this.nextStep}
                    />
                ),
                summary: `${cityName}, ${deliveryName}`,
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

        return data.map(el => ({ value: el.ID, label: el.name }));
    };

    getAddressOptions = async value => {
        const { formValues } = this.props;
        const deliveryID = get(formValues, constants.fields.DELIVERY);

        switch (deliveryID) {
            case 1:
                return await this.getDepartmentsOptions(value);
            case 2:
                return await this.getStreetOptions(value);
            default:
                return [];
        }
    };

    getDepartmentsOptions = async value => {
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

        return data.map(el => ({
            value: el.ID,
            label: el.name
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

        change(fields.DELIVERY, null);
        change(fields.ADDRESS, null);
        change(fields.PAYMENT, null);

        resetOptions(Object.values(options));

        if (value) {
            fetchDelivery(value);
        }
    };

    handleDeliveryChange = e => {
        const { fetchPayment, resetOptions } = this.props;
        const { options, fields } = constants;

        resetOptions(Object.values([options.PAYMENT]));
        this.props.change(fields.ADDRESS, null);
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
    reduxForm(formConfig)
)(CheckoutWizard);
