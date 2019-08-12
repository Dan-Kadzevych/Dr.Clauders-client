import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { required, slug } from 'utils/redux/validationRules';
import { Input } from 'components';
import { H4, SubmitBtn, FormGroup, GlobalError, ButtonAlt } from 'elements';
import Select from './Select';
import { petOptions } from './duck/constants';
import { requiredIfNoParent } from './duck/utils';
import { color_black, color_white } from 'styles/variables';

const FORM_NAME = 'category';

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

const CategoryForm = ({
    handleSubmit,
    parentCategories,
    error,
    updatedCategory,
    stopUpdating,
    categoryParent,
    change
}) => (
    <Form onSubmit={handleSubmit}>
        {error && <GlobalError source={error} />}
        {updatedCategory ? (
            <H4>Редактировать Категорию "{updatedCategory.name}"</H4>
        ) : (
            <H4>Добавить Категорию</H4>
        )}
        <Field
            type="text"
            name="name"
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
        <FormGroup>
            <Field
                name="pet"
                label="Кому"
                small
                options={petOptions}
                disabled={categoryParent}
                component={Select}
                validate={[requiredIfNoParent]}
            />
            <Field
                name="parent"
                label="Родитель"
                small
                handleChange={value =>
                    change(
                        'pet',
                        petOptions.find(pet => pet.label === value.pet)
                    )
                }
                options={parentCategories}
                component={Select}
            />
        </FormGroup>

        <ButtonGroup>
            {updatedCategory && (
                <StopUpdateBtn type="button" onClick={stopUpdating}>
                    Отменить Изменения
                </StopUpdateBtn>
            )}
            <SubmitBtn className="m-n">
                {updatedCategory ? 'Сохранить' : 'Добавить'}
            </SubmitBtn>
        </ButtonGroup>
    </Form>
);

export default reduxForm(formConfig)(CategoryForm);
