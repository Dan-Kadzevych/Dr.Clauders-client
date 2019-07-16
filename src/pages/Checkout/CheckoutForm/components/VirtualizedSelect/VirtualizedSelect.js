import React from 'react';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';

import { VirtualizedList as MenuList, DropdownIndicator } from './index';
import { font_quaternary } from 'styles/variables';

const Select = styled(AsyncSelect)`
    margin-bottom: 6px;
    & .Select {
        &__control {
            line-height: 2.8rem;

            ${font_quaternary};
            font-size: 1.5rem;
            padding: 1.2rem 1.5rem;
            border: 1px solid rgba(0, 0, 0, 0.13);

            &--is-focused {
                outline: none;
                border-color: rgba(0, 0, 0, 0.13) !important;
                box-shadow: none;
            }
            border-radius: 0;
        }

        &__value-container {
            padding: 0;
            line-height: 2rem;
        }
        &__input {
            input {
                ${font_quaternary};
            }
        }

        &__indicator-separator {
            display: none;
        }

        &__menu {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
            border-radius: 0;

            ${font_quaternary};
        }
        &__option {
            padding: 5px 8px;
            cursor: pointer;
            &--is-focused,
            &--is-selected {
                background-color: #f5fafd;
                color: #495c68;
            }
        }
    }
`;

const VirtualizedSelect = ({ input, handleChange, loadOptions }) => {
    return (
        <Select
            {...input}
            components={{ DropdownIndicator, MenuList }}
            classNamePrefix="Select"
            onChange={value => {
                input.onChange(value);
                handleChange(value);
            }}
            onBlur={() => input.onBlur(input.value)}
            cacheOptions
            defaultOptions
            loadOptions={loadOptions}
        />
    );
};

export default VirtualizedSelect;
