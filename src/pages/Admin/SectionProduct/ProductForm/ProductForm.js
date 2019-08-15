import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { required, slug } from 'utils/redux/validationRules';
import { Input, Textarea, Select } from 'components';
import { H4, SubmitBtn, GlobalError, ButtonAlt } from 'elements';
import { Spinner } from 'blocks';
import { operations, selectors } from 'pages/Admin/duck';
import { minValue1, normalizeProduct } from 'pages/Admin/duck/utils';
import { StyledForm } from 'pages/Admin/elements';
import { Tabs } from './index';
import { color_black, color_white } from 'styles/variables';

const FORM_NAME = 'product';

const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true
};

const StopUpdateBtn = styled(ButtonAlt)`
    &&& {
        outline: 1px solid ${color_black};
        color: ${color_black};
        background-color: ${color_white};
        margin-right: 2rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: start;
    margin-top: 2rem;
`;

const mapStateToProps = state => ({
    updatedProduct: selectors.getUpdatedProduct(state),
    categoriesOptions: selectors.getCategoriesOptions(state),
    initialValues: selectors.getProductInitialValues(state),
    isLoading: selectors.isProductFormLoading(state)
});
const mapDispatchToProps = dispatch => ({
    addProduct(values) {
        const normalizedProduct = normalizeProduct(values);

        return dispatch(operations.addProduct(normalizedProduct));
    },
    updateProduct(
        values,
        dispatch,
        {
            updatedProduct: { _id: productID }
        }
    ) {
        const product = normalizeProduct(values);

        return dispatch(operations.updateProduct(productID, product));
    },
    stopUpdatingProduct() {
        return dispatch(operations.stopUpdatingProduct());
    }
});

const ProductForm = ({
    handleSubmit,
    addProduct,
    updateProduct,
    updatedProduct,
    stopUpdatingProduct,
    categoriesOptions,
    error,
    isLoading
}) => (
    <StyledForm
        onSubmit={handleSubmit(updatedProduct ? updateProduct : addProduct)}
    >
        {isLoading && <Spinner />}
        {error && <GlobalError source={error} />}
        {updatedProduct ? (
            <H4>Редактировать Продукт "{updatedProduct.title}"</H4>
        ) : (
            <H4>Добавить Продукт</H4>
        )}
        <Field
            type="text"
            name="title"
            label="Название"
            small
            component={Input}
            validate={[required]}
        />
        <Field
            type="text"
            name="slug"
            label="Slug"
            small
            component={Input}
            validate={[required, slug]}
        />
        <Field
            type="number"
            name="price"
            label="Цена"
            small
            min="1"
            component={Input}
            validate={[required, minValue1]}
        />
        <Field
            name="categories"
            label="Категории"
            small
            isMulti
            showClear
            closeMenuOnSelect={false}
            options={categoriesOptions}
            component={Select}
            validate={[required]}
        />

        <Field
            type="textarea"
            name="description.main"
            label="Описание"
            small
            component={Textarea}
            validate={[required]}
        />

        <FieldArray name="description.tabs" component={Tabs} />

        <ButtonGroup>
            {updatedProduct && (
                <StopUpdateBtn type="button" onClick={stopUpdatingProduct}>
                    Отменить Изменения
                </StopUpdateBtn>
            )}
            <SubmitBtn className="m-n">
                {updatedProduct ? 'Сохранить' : 'Добавить'}
            </SubmitBtn>
        </ButtonGroup>
    </StyledForm>
);

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(ProductForm);
