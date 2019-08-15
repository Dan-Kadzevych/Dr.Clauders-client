import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';

import { required, slug } from 'utils/redux/validationRules';
import { Input, Select } from 'components';
import { Spinner } from 'blocks';
import { H4, SubmitBtn, FormGroup, GlobalError, ButtonAlt } from 'elements';
import { petOptions } from '../duck/constants';
import { StyledForm } from '../elements';
import { operations, selectors } from '../duck';
import { normalizeCategory, requiredIfNoParent } from '../duck/utils';
import { color_black, color_white } from 'styles/variables';

const FORM_NAME = 'category';

const formConfig = {
    form: FORM_NAME,
    enableReinitialize: true
};

const categoryFormSelector = formValueSelector(FORM_NAME);

const StopUpdateBtn = styled(ButtonAlt)`
    && {
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
    categoriesOptions: selectors.getParentCategoriesOptions(state),
    updatedCategory: selectors.getUpdatedCategory(state),
    initialValues: selectors.getCategoryInitialValues(state),
    categoryParent: categoryFormSelector(state, 'parent.value'),
    isLoading: selectors.isCategoryFormLoading(state)
});

const mapDispatchToProps = dispatch => ({
    addCategory(values) {
        const category = normalizeCategory(values);

        return dispatch(operations.addCategory(category));
    },
    updateCategory(
        values,
        dispatch,
        {
            updatedCategory: { _id: categoryID }
        }
    ) {
        const category = normalizeCategory(values);

        return dispatch(operations.updateCategory(categoryID, category));
    },
    stopUpdating() {
        return dispatch(operations.stopUpdatingCategory());
    }
});

const CategoryForm = ({
    handleSubmit,
    updateCategory,
    addCategory,
    categoriesOptions,
    error,
    updatedCategory,
    stopUpdating,
    categoryParent,
    change,
    isLoading
}) => (
    <StyledForm
        onSubmit={handleSubmit(updatedCategory ? updateCategory : addCategory)}
    >
        {isLoading && <Spinner />}
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
                disabled={!!categoryParent}
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
                options={categoriesOptions}
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
    </StyledForm>
);

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(formConfig)
)(CategoryForm);
