import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { required } from 'utils/redux/validationRules';
import { Input, Textarea } from 'components';
import { H4, SubmitBtn, GlobalError, ButtonAlt } from 'elements';
import Select from './Select';
import { color_black, color_white } from 'styles/variables';

const FORM_NAME = 'product';

const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true
};

const StopUpdateBtn = styled(ButtonAlt)`
    &&& {
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

const ProductForm = ({
    handleSubmit,
    error,
    updatedProduct,
    stopUpdating,
    categories
}) => (
    <Form onSubmit={handleSubmit}>
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
            validate={[required]}
        />
        <Field
            type="number"
            name="price"
            label="Цена"
            small
            component={Input}
            validate={[required]}
        />
        <Field
            name="categories"
            label="Категории"
            small
            isMulti
            showClear
            closeMenuOnSelect={false}
            options={categories}
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

        <ButtonGroup>
            {updatedProduct && (
                <StopUpdateBtn type="button" onClick={stopUpdating}>
                    Отменить Изменения
                </StopUpdateBtn>
            )}
            <SubmitBtn className="m-n">
                {updatedProduct ? 'Сохранить' : 'Добавить'}
            </SubmitBtn>
        </ButtonGroup>
    </Form>
);

export default reduxForm(formConfig)(ProductForm);
