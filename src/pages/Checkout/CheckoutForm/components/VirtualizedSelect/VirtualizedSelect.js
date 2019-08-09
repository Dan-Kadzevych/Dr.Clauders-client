import React from 'react';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';

import { Select } from 'elements';
import { components } from 'components/form/Select';
import { VirtualizedList as MenuList } from './index';

const VirtualizedSelect = ({
    input,
    placeholder,
    handleChange,
    small,
    loadOptions,
    creatable,
    error
}) => {
    return (
        <Select
            {...input}
            as={creatable ? AsyncCreatableSelect : AsyncSelect}
            isClearable
            placeholder={placeholder || ''}
            components={{ ...components, MenuList }}
            classNamePrefix="Select"
            onChange={value => {
                input.onChange(value);
                handleChange && handleChange(value);
            }}
            onBlur={() => input.onBlur(input.value)}
            cacheOptions
            defaultOptions
            small={small}
            loadOptions={loadOptions}
            error={error}
            formatCreateLabel={val => 'Выбрать ' + val}
            noOptionsMessage={() => 'Ничего не найдено'}
            loadingMessage={() => 'Поиск...'}
        />
    );
};

export default VirtualizedSelect;
