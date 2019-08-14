import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styled, { css } from 'styled-components';

import { ErrorMessage, Label, InputContainer } from 'elements';
import { phoneFormat } from 'duck/constants';

import { font_quaternary, color_grey_light_5 } from 'styles/variables';
import { borderError } from 'styles/mixins';

const StyledInput = styled(({ error, touched, phone, small, ...params }) =>
    phone ? (
        <NumberFormat {...params} format={phoneFormat} mask="_" />
    ) : (
        <input {...params} />
    )
)`
    line-height: 2.8rem;

    ${font_quaternary};
    font-size: 1.5rem;
    padding: ${({ small }) => (small ? '0.6rem 0.8rem' : '1.2rem 1.5rem')};
    border: 1px solid rgba(0, 0, 0, 0.13);

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: ${color_grey_light_5};
        `}

    :focus {
        outline: none;
    }

    ${borderError};
`;

const Input = ({
    input,
    type,
    label,
    meta: { touched, error },
    placeholder,
    mask,
    small,
    disabled,
    min,
    className,
    autoComplete
}) => (
    <InputContainer disabled={disabled}>
        {label && <Label> {label} </Label>}

        <StyledInput
            {...input}
            className={className}
            disabled={disabled}
            error={touched && error}
            touched={touched && !error}
            placeholder={placeholder}
            type={type}
            min={min}
            phone={mask === 'phone'}
            small={small}
            autoComplete={autoComplete}
        />

        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
);

Input.defaultProps = {
    small: false,
    disabled: false,
    min: null,
    type: 'text',
    label: '',
    placeholder: '',
    mask: '',
    autoComplete: 'on',
    input: {},
    meta: {}
};

Input.propTypes = {
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    mask: PropTypes.string,
    autoComplete: PropTypes.oneOf(['on', 'off']),
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    input: PropTypes.object,
    meta: PropTypes.object
};

export default Input;
