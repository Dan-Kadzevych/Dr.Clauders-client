import React from 'react';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';

import { Select } from 'components';
import { required } from 'utils/redux/validationRules';
import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const SmallInput = styled.input`
    line-height: 2.8rem;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.13);
    width: 100%;

    :focus {
        outline: none;
    }

    ${borderError};
`;

const Street = styled.div`
    padding-left: 3rem;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 6fr 1fr 1fr;
    align-items: start;
`;

const StyledSelect = styled(Select)`
    padding: 0;
    margin: 0;
`;

const CustomInput = ({
    input,
    type,
    meta: { touched, error },
    placeholder
}) => {
    return (
        <SmallInput
            {...input}
            error={touched && error}
            type="type"
            placeholder={placeholder}
        />
    );
};

const StreetSection = ({ loadOptions }) => (
    <FormSection name="address">
        <Street>
            <Field
                name="street"
                placeholder="Выберите улицу"
                component={StyledSelect}
                virtualized
                async
                creatable
                small
                loadOptions={loadOptions}
                validate={[required]}
            />
            <Field
                name="house"
                placeholder="Дом"
                component={CustomInput}
                validate={[required]}
            />
            <Field name="apartment" placeholder="Кв" component={CustomInput} />
        </Street>
    </FormSection>
);

export default StreetSection;
