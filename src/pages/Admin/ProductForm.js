import React from 'react';
import { Form, Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { required, slug } from 'utils/redux/validationRules';
import { Input, Textarea } from 'components';
import { toRgba } from 'utils/utils';
import { H5, H4, SubmitBtn, GlobalError, ButtonAlt } from 'elements';
import Select from './Select';
import { minValue1 } from './duck/utils';
import { color_black, color_white, color_grey_light } from 'styles/variables';

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

const TabsHeader = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

const TabsElement = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${color_grey_light};
    padding: 1rem;
    background-color: rgba(${toRgba(color_grey_light)} 0.6);
`;
const TabsElementHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TabsList = styled.ul`
    margin-top: 1rem;
    list-style-type: none;
    overflow-y: scroll;
    max-height: 30rem;
    border: 1px solid ${color_grey_light};
`;

const Tabs = ({ fields, meta: { error, submitFailed } }) => (
    <>
        <TabsHeader>
            <H5 className="m-n">Табы</H5>{' '}
            <ButtonAlt
                className="ml-sm-s"
                type="button"
                onClick={() => fields.push({})}
            >
                Плюс +
            </ButtonAlt>
        </TabsHeader>

        <TabsList>
            {submitFailed && error && <span>{error}</span>}
            {fields.map((tab, index) => (
                <TabsElement key={index}>
                    <TabsElementHeader>
                        <h4>#{index + 1}</h4>
                        <ButtonAlt
                            type="button"
                            onClick={() => fields.remove(index)}
                        >
                            X
                        </ButtonAlt>
                    </TabsElementHeader>
                    <div>
                        <Field
                            name={`${tab}.title`}
                            type="text"
                            component={Input}
                            label="Название"
                            small
                            validate={[required]}
                        />
                        <Field
                            type="textarea"
                            name={`${tab}.content`}
                            label="Описание"
                            small
                            rows="3"
                            component={Textarea}
                            validate={[required]}
                        />
                    </div>
                </TabsElement>
            ))}
        </TabsList>
    </>
);

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

        <FieldArray name="description.tabs" component={Tabs} />

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
