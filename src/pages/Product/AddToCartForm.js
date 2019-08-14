import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { AddProductBtn, Input, Icon } from 'components';
import { A } from 'elements';
import { addToCart } from 'pages/Cart/duck/operations';
import {
    getIsProductAddedFunc,
    getIsProductRequestedFunc
} from 'pages/Cart/duck/selectors';
import { formatQuantityValue } from 'utils/redux/helpers';
import { minValue1 } from './duck/utils';
import { number, required } from 'utils/redux/validationRules';
import { color_secondary, color_primary } from 'styles/variables';
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
const CartInput = styled(Input)`
    width: 7rem;
    font-size: 1.9rem;
    text-align: center;
    height: 3.9rem;
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

const mapStateToProps = (state, { ID }) => {
    const isProductRequestedFunc = getIsProductRequestedFunc(state);
    const isProductAddedFunc = getIsProductAddedFunc(state);

    return {
        isLoading: isProductRequestedFunc(ID),
        isAdded: isProductAddedFunc(ID)
    };
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

const CartFrom = ({ handleSubmit, isLoading, isAdded, addToCart }) => (
    <Cart
        onSubmit={handleSubmit(({ quantity }) => addToCart(Number(quantity)))}
    >
        <CartInputBox>
            <Field
                name="quantity"
                type="number"
                min="1"
                autoComplete="off"
                small
                component={CartInput}
                validate={[required, number, minValue1]}
                format={formatQuantityValue}
            />
        </CartInputBox>

        <AddProductBtn
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            isAdded={isAdded}
        >
            Add to cart
        </AddProductBtn>
    </Cart>
);

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CartFrom);
