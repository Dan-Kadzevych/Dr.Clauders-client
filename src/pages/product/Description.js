import React from 'react';
import styled from 'styled-components';

import { H1 } from 'elements';
import CartForm from './CartForm';
import { color_grey_dark } from 'styles/variables';

const StyledDescription = styled.div`
    grid-column: 2 / -1;
`;
const Title = styled(H1)`
    font-size: 3.8rem;
    line-height: 5rem;
    font-weight: 300;
`;

const Price = styled.span`
    font-size: 1.9rem;
    color: ${color_grey_dark};
    margin-top: 1rem;
    display: block;
`;
const DescriptionText = styled.div`
    margin-top: 2rem;
`;

const Description = ({ title, price, description }) => (
    <StyledDescription>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <DescriptionText>{description}</DescriptionText>
        <CartForm />
    </StyledDescription>
);

export default Description;
