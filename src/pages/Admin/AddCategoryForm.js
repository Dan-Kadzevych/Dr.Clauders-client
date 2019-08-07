import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import { required } from 'utils/redux/validationRules';
import { Input } from 'components';
import { H4, SubmitBtn, FormGroup, GlobalError } from 'elements';
import Select from './Select';
import { petOptions } from './duck/constants';

const FORM_NAME = 'addCategory';

const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true,
    initialValues: {
        name: '',
        slug: '',
        parent: { value: 0, label: 'Нет' },
        pet: null
    }
};

const AddCategoryForm = ({ handleSubmit, parentCategories, error }) => (
    <Form onSubmit={handleSubmit}>
        {error && <GlobalError source={error} />}
        <H4>Добавить Категорию</H4>
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
            validate={[required]}
        />
        <FormGroup>
            <Field
                name="pet"
                label="Кому"
                small
                options={petOptions}
                component={Select}
                validate={[required]}
            />
            <Field
                name="parent"
                label="Родитель"
                small
                options={parentCategories}
                component={Select}
            />
        </FormGroup>

        <SubmitBtn>Добавить</SubmitBtn>
    </Form>
);

export default reduxForm(formConfig)(AddCategoryForm);
