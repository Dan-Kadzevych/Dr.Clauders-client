import React from 'react';

import VirtualizedSelect from './VirtualizedSelect';
import { InputLabel } from '../elements';

const Select = ({ input, label, handleChange, loadOptions, meta }) => (
    <div>
        <InputLabel> {label} </InputLabel>
        <VirtualizedSelect
            input={input}
            loadOptions={loadOptions}
            handleChange={handleChange}
        />
    </div>
);
export default Select;
