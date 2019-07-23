import React from 'react';
import styled from 'styled-components';

import { Spinner } from 'blocks';
import { InputLabel } from 'elements';
import CustomRadio from './CustomRadio';
import { font_quaternary, color_grey_dark } from 'styles/variables';

const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 10rem;
    :not(:first-child) {
        margin-top: 2rem;
    }
`;

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const RadioLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    line-height: normal;
    padding-left: 3rem;
    ${font_quaternary};
    :first-of-type {
        margin-top: 1rem;
    }
    &:not(:first-of-type) {
        margin-top: 2rem;
    }
`;

const Price = styled.div`
    color: ${color_grey_dark};
`;

const RadioGroup = ({
    input,
    options,
    label,
    handleChange,
    loadAddressOptions,
    loading
}) => (
    <GroupContainer>
        <InputLabel>{label}</InputLabel>
        {loading && <Spinner background={'transparent'} />}
        {options.map(({ value, label, priceDescription, renderSection }) => {
            return (
                <RadioContainer key={value}>
                    <RadioLabel>
                        <CustomRadio
                            type="radio"
                            {...input}
                            value={value}
                            checked={value === input.value}
                            onChange={e => {
                                input.onChange(e);
                                handleChange && handleChange(e);
                            }}
                        />
                        <div>
                            {label}
                            {priceDescription && (
                                <Price>
                                    Стоимость доставки: {priceDescription}
                                </Price>
                            )}
                        </div>
                    </RadioLabel>
                    {value === input.value &&
                        renderSection &&
                        renderSection({
                            loadOptions: loadAddressOptions
                        })}
                </RadioContainer>
            );
        })}
    </GroupContainer>
);

export default RadioGroup;
