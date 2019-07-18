import React from 'react';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';

import { ErrorMessage } from 'elements';
import { required } from 'utils/redux/validationRules';
import VirtualizedSelect from '../../components/VirtualizedSelect';

const Department = styled.label`
    padding-left: 3rem;
    margin: 2rem 0;
`;

const Select = ({
    input,
    placeholder,
    loadOptions,
    meta: { touched, error }
}) => (
    <div>
        <VirtualizedSelect
            input={input}
            placeholder={placeholder}
            loadOptions={loadOptions}
            error={touched && error}
            small
            creatable
        />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
);

const DepartmentSection = ({ loadOptions }) => (
    <FormSection name="address">
        <Department>
            <Field
                name="department"
                placeholder="Выберите отделение"
                component={Select}
                loadOptions={loadOptions}
                validate={[required]}
            />
        </Department>
    </FormSection>
);

export default DepartmentSection;
