import React from 'react';
import styled from 'styled-components';

import { ButtonAlt, A } from 'elements';

const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;
const Link = styled(A)`
    :link,
    :visited {
        color: #fff;
        margin-top: 1.5rem;
    }
`;

const EmptyCart = () => (
    <StyledEmptyCart>
        Your cart is currently empty.
        <Link to="/pet-supplements/dog-supplements">
            <ButtonAlt>Return to shop</ButtonAlt>
        </Link>
    </StyledEmptyCart>
);

export default EmptyCart;
