import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { addToCart } from 'pages/Cart/duck/operations';
import { formatQuantityValue } from 'utils/redux/helpers';
import { minValue1 } from './duck/utils';
import { number, required } from 'utils/redux/validationRules';
import {
    font_quaternary,
    color_secondary,
    color_primary
} from 'styles/variables';
import { ButtonAlt, Icon, A } from 'elements';
import successNotification from 'notifications/success';

const Cart = styled(Form)`
    display: flex;
    align-items: start;
    margin: 2rem 0 3rem 0;
`;
const CartInputBox = styled.div`
    margin-right: 1.5rem;
    display: block;
`;
const CartInput = styled.input`
    display: block;
    width: 7rem;
    font-size: 1.9rem;
    line-height: 2.8rem;
    padding: 1.2rem 1.5rem;
    ${font_quaternary};
    text-align: center;
    border: 1px solid #ccc;
    height: 4rem;

    :focus {
        outline: none;
    }
`;

const SubmitBtn = styled(ButtonAlt)`
    :hover {
        background-color: ${color_secondary};
    }
`;

const Notification = styled.div`
    display: flex;
    align-items: start;
`;

const NotificationLink = styled(A)`
    :link,
    :visited {
        color: ${color_secondary};
        :hover {
            color: ${color_primary};
        }
    }
`;

const CheckedIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    margin-top: 3px;
    position: relative;
    top: 2px;
`;

const initialValues = {
    quantity: 1
};

const formConfig = {
    form: 'addToCart',
    initialValues
};

const mapDispatchToProps = (dispatch, { ID, title }) => ({
    addToCart(quantity) {
        dispatch(addToCart(ID, quantity)).then(() =>
            successNotification(({ closeToast }) => (
                <Notification>
                    <div>
                        <CheckedIcon icon="checked" />
                        {quantity} × "{title}" has been added to your cart.{' '}
                        <NotificationLink onClick={closeToast} to="/cart">
                            View Cart
                        </NotificationLink>
                    </div>
                </Notification>
            ))
        );
    }
});

class CartFrom extends Component {
    renderInput = ({ input, type }) => {
        return (
            <CartInput
                {...input}
                required
                min="1"
                type={type}
                autoComplete="off"
            />
        );
    };

    onSubmit = ({ quantity }) => {
        const { addToCart } = this.props;

        addToCart(Number(quantity));
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <Cart onSubmit={handleSubmit(this.onSubmit)}>
                <CartInputBox>
                    <Field
                        name="quantity"
                        type="number"
                        component={this.renderInput}
                        validate={[required, number, minValue1]}
                        format={formatQuantityValue}
                    />
                </CartInputBox>

                <SubmitBtn type="submit">Add to cart</SubmitBtn>
            </Cart>
        );
    }
}

export default compose(
    connect(
        null,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CartFrom);
