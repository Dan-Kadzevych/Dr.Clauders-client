import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, reduxForm, getFormValues } from 'redux-form';
import styled from 'styled-components';
import isEqual from 'lodash/isEqual';

import { A, _Base } from 'elements/index';
import { successNotification } from 'notifications/index';
import { Spinner } from 'blocks';
import { toUAH } from 'utils/currencyFormatters';
import selectors from '../duck/selectors';
import { operations } from '../duck/index';
import { getTotalPrice, getNewCart } from '../duck/utils';
import { Row, Image, RemoveButton, Footer, Quantity, HeaderRow } from './index';
import { Notification, EmptyCart } from '../index';
import { color_secondary, color_primary } from 'styles/variables';

const emptyObj = {};
const StyledForm = styled(Form)`
    margin: 2rem 0;
    position: relative;
    min-height: 10rem;
    grid-column: 1 / -1;
`;

const Title = styled(A)`
    :link,
    :visited {
        color: ${color_secondary};
        font-weight: 600;
        line-height: 2.2rem;
        justify-self: start;
        :hover {
            color: ${color_primary};
        }
    }
`;

const FORM_NAME = 'cart';
const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true
};

const mapStateToProps = state => {
    const initialValues = selectors.getInitialValues(state);
    const formValues = getFormValues(FORM_NAME)(state) || emptyObj;

    return {
        products: selectors.getCartProducts(state),
        productIDs: selectors.getCartProductIDs(state),
        initialValues,
        formValues,
        isEqual: isEqual(initialValues, formValues)
    };
};

const mapDispatchToProps = dispatch => ({
    addToCart(productID, quantity) {
        return dispatch(operations.addToCart(productID, quantity)).then(
            dispatch(operations.fetchCartProduct(productID))
        );
    },
    removeFormCart(productID, title, quantity, undo) {
        return dispatch(operations.removeFromCart(productID)).then(() =>
            successNotification(
                ({ closeToast }) => (
                    <Notification
                        handleUndo={() => {
                            undo(productID, quantity);
                            closeToast();
                        }}
                        text={`${title} removed.`}
                    />
                ),
                { closeOnClick: false }
            )
        );
    },
    updateCart(values) {
        return dispatch(operations.updateCart(values)).then(() =>
            successNotification(<Notification text="Cart updated" />, {
                autoClose: 2000,
                hideProgressBar: true
            })
        );
    }
});

class CartForm extends _Base {
    onSubmit = formValues => {
        const { updateCart, products, productIDs } = this.props;
        updateCart(getNewCart(productIDs, products, formValues));
    };

    handleRemove(_id, title) {
        const { removeFormCart, initialValues } = this.props;
        removeFormCart(_id, title, initialValues[_id], this.undoRemove);
    }

    undoRemove(productID, quantity) {
        const { addToCart } = this.props;
        addToCart(productID, quantity);
    }
    render() {
        const {
            handleSubmit,
            products,
            formValues,
            isEqual,
            isUpdating,
            isLoading,
            productIDs
        } = this.props;

        return productIDs.length ? (
            <StyledForm onSubmit={handleSubmit(this.onSubmit)}>
                {!isLoading ? (
                    <>
                        <HeaderRow />
                        {products.map(
                            ({ slug, title, media: { url }, _id, price }) => (
                                <Row key={_id}>
                                    <RemoveButton
                                        type="button"
                                        handleClick={() =>
                                            this.handleRemove(_id, title)
                                        }
                                    />
                                    <Image slug={slug} url={url} />
                                    <Title to={slug}>{title}</Title>
                                    <span>{toUAH(price)}</span>
                                    <Quantity _id={_id} />

                                    <span>
                                        {toUAH(
                                            getTotalPrice(
                                                price,
                                                formValues[_id]
                                            )
                                        )}
                                    </span>
                                </Row>
                            )
                        )}
                        <Footer isEqual={isEqual} />
                        {isUpdating && <Spinner />}
                    </>
                ) : (
                    <Spinner />
                )}
            </StyledForm>
        ) : (
            <EmptyCart />
        );
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CartForm);
