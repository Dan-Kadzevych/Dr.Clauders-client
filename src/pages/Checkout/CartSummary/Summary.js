import React from 'react';
import { toUAH } from 'utils/currencyFormatters';
import styled, { css } from 'styled-components';

import { ButtonAlt } from 'elements';
import { Title } from './elements';
import {
    color_grey_dark,
    color_grey_light,
    color_primary,
    color_secondary,
    color_white
} from 'styles/variables';

const StyledSummary = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`;

const Total = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color_grey_dark};
`;

const Delivery = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${color_grey_dark};
`;

const Price = styled.span`
    font-weight: 700;
    line-height: 2.2rem;
    color: ${color_secondary};
`;

const TotalPrice = styled.span`
    font-size: 2.2rem;
    padding: 0 5px;
    font-weight: 700;
    background-color: ${color_secondary};
    color: ${color_white};
`;

const Payment = styled.div`
    margin-top: 2.5rem;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    color: ${color_grey_dark};
    border-top: 1px solid ${color_grey_light};
`;

const SubmitBtn = styled(ButtonAlt)`
    margin-top: 2.5rem;
    ${({ disabled }) =>
        disabled
            ? css`
                  opacity: 0.5;
                  cursor: initial;

                  :hover {
                      opacity: 0.1;
                      background-color: ${color_primary};
                  }
              `
            : ''}
`;

const Summary = ({
    isValid,
    submit,
    cartSummary,
    totalPrice,
    deliveryPrice
}) => (
    <StyledSummary>
        <Title>Summary</Title>
        <Total>
            {cartSummary.quantity} товаров на сумму
            <Price>{toUAH(cartSummary.price)}</Price>
        </Total>
        {deliveryPrice && (
            <Delivery>
                Стоимость доставки: <Price>{deliveryPrice}</Price>
            </Delivery>
        )}
        <Payment>
            К оплате
            <TotalPrice>{toUAH(totalPrice)}</TotalPrice>
        </Payment>
        <SubmitBtn onClick={submit} disabled={!isValid}>
            Заказ подтверждаю
        </SubmitBtn>
    </StyledSummary>
);

export default Summary;
