import React from 'react';
import styled from 'styled-components';
import { color_secondary, color_grey_light } from 'styles/variables';

const StyledRadio = styled.span`
    width: 2rem;
    height: 2rem;
    border: 1px solid ${color_grey_light};
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: -1px;

    &:after {
        content: '';
        height: 0.8rem;
        width: 0.8rem;
        background-color: ${color_secondary};
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
`;

const RadioInput = styled.input`
    display: none;

    &:checked ~ ${StyledRadio} {
        border-color: ${color_secondary};

        :after {
            opacity: 1;
        }
    }
`;

const CustomRadio = props => (
    <>
        <RadioInput {...props} />
        <StyledRadio />
    </>
);

export default CustomRadio;
