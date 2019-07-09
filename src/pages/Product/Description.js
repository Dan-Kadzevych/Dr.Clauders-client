import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { H1 } from 'elements';
import AddToCartForm from './AddToCartForm';
import { color_secondary } from 'styles/variables';

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
    color: ${color_secondary};
    margin-top: 1rem;
    display: block;
`;
const DescriptionText = styled(ReactMarkdown)`
    margin-top: 2rem;

    p {
        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    }
`;

const Description = ({ title, price, description, ID }) => (
    <StyledDescription>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <DescriptionText source={description} />
        <AddToCartForm ID={ID} title={title} />
    </StyledDescription>
);

export default Description;
