import React from 'react';

import { ErrorMessage } from 'elements';
import VirtualizedSelect from './VirtualizedSelect';
import { InputLabel } from '../elements';

const Select = ({
    input,
    label,
    handleChange,
    loadOptions,
    meta: { touched, error }
}) => (
    <div>
        <InputLabel> {label} </InputLabel>
        <VirtualizedSelect
            input={input}
            error={touched && error}
            loadOptions={loadOptions}
            handleChange={handleChange}
        />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
);
export default Select;
