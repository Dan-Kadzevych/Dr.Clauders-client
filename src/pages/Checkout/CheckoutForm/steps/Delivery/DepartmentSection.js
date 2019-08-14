import React from 'react';
import { Field, FormSection } from 'redux-form';
import styled from 'styled-components';

import { Select } from 'components';
import { required } from 'utils/redux/validationRules';

const Department = styled.label`
    padding-left: 3rem;
    margin: 2rem 0;
`;

const DepartmentSection = ({ loadOptions, description }) => (
    <FormSection name="address">
        <Department>
            <Field
                name="department"
                placeholder="Выберите отделение"
                component={Select}
                small
                creatable
                virtualized
                async
                loadOptions={loadOptions}
                validate={[required]}
                description={description}
            />
        </Department>
    </FormSection>
);

export default DepartmentSection;
