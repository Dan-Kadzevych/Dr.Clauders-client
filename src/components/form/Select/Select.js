import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import styled, { css } from 'styled-components';

import { Label, ErrorMessage, InputContainer } from 'elements';
import components, { VirtualizedList } from './components';
import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const StyledSelect = styled(ReactSelect)`
    & .Select {
        &__control {
            line-height: 2.8rem;

            ${font_quaternary};
            font-size: 1.5rem;
            padding: ${({ small }) =>
                small ? '0.6rem 0.8rem' : '1.2rem 1.5rem'};
            border: 1px solid rgba(0, 0, 0, 0.13);
            border-radius: 0;
            ${borderError};

            :hover {
                border: 1px solid rgba(0, 0, 0, 0.13);
                ${borderError};
            }

            &--is-focused {
                outline: none;
                border-color: rgba(0, 0, 0, 0.13) !important;
                box-shadow: none;
            }
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

        ${({ showClear }) =>
            !showClear &&
            css`
                &__indicator-separator {
                    display: none;
                }
                &__clear-indicator {
                    display: none;
                }
            `}

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

const Select = ({
    async,
    creatable,
    virtualized,
    clearable,
    input,
    small,
    placeholder,
    label,
    disabled,
    handleChange,
    meta: { touched, error },
    options,
    loadOptions,
    noOptionsMessage,
    isMulti,
    showClear,
    closeMenuOnSelect,
    cacheOptions,
    defaultOptions,
    formatCreateLabel,
    loadingMessage,
    className
}) => {
    let customComponents = components;
    let $select = ReactSelect;

    if (virtualized) {
        customComponents = { ...customComponents, MenuList: VirtualizedList };
    }

    if (creatable) {
        $select = ReactCreatableSelect;
    }

    if (async) {
        $select = AsyncSelect;
    }

    if (async && creatable) {
        $select = AsyncCreatableSelect;
    }

    return (
        <InputContainer>
            {label && <Label>{label}</Label>}

            <StyledSelect
                {...input}
                classNamePrefix="Select"
                as={$select}
                small={small}
                isClearable={clearable}
                isDisabled={disabled}
                placeholder={placeholder}
                isMulti={isMulti}
                showClear={showClear}
                closeMenuOnSelect={closeMenuOnSelect}
                components={customComponents}
                onChange={value => {
                    input.onChange(value);
                    handleChange(value);
                }}
                onBlur={() => input.onBlur(input.value)}
                error={touched && error}
                noOptionsMessage={noOptionsMessage}
                options={options}
                loadOptions={loadOptions}
                cacheOptions={cacheOptions}
                defaultOptions={defaultOptions}
                formatCreateLabel={formatCreateLabel}
                loadingMessage={loadingMessage}
                className={className}
            />
            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
};

Select.defaultProps = {
    async: false,
    creatable: false,
    virtualized: false,
    disabled: false,
    clearable: true,
    small: false,
    isMulti: false,
    showClear: false,
    closeMenuOnSelect: true,
    cacheOptions: true,
    defaultOptions: true,
    placeholder: 'Выбрать...',
    label: '',
    className: '',
    input: {},
    meta: {},
    options: [],
    handleChange: () => {},
    loadOptions: () => {},
    noOptionsMessage: () => 'Ничего не найдено',
    formatCreateLabel: val => 'Выбрать ' + val,
    loadingMessage: () => 'Поиск...'
};

Select.propTypes = {
    async: PropTypes.bool,
    creatable: PropTypes.bool,
    virtualized: PropTypes.bool,
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    cacheOptions: PropTypes.bool,
    defaultOptions: PropTypes.bool,
    small: PropTypes.bool,
    isMulti: PropTypes.bool,
    showClear: PropTypes.bool,
    closeMenuOnSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    options: PropTypes.array,
    handleChange: PropTypes.func,
    loadOptions: PropTypes.func,
    noOptionsMessage: PropTypes.func,
    formatCreateLabel: PropTypes.func,
    loadingMessage: PropTypes.func
};

export default Select;
