import React from 'react';
import { Field } from 'redux-form';

import { number, required } from 'utils/redux/validationRules';
import { minValue0 } from 'pages/Cart/duck/utils';
import { formatQuantityValue } from 'utils/redux/helpers';
import CartInput from './CartInput';

const Quantity = ({ _id }) => (
    <div>
        <Field
            name={_id}
            type="number"
            component={CartInput}
            validate={[required, number, minValue0]}
            format={formatQuantityValue}
        />
    </div>
);

export default Quantity;
