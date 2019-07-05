import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonAlt } from 'elements';

const UpdateCartBtn = styled(ButtonAlt)`
    ${({ disabled }) =>
        disabled
            ? css`
                  opacity: 0.5;
                  padding: 0.9rem 1.5rem !important;
                  cursor: not-allowed;
                  :hover {
                      opacity: 0.1;
                  }
              `
            : ''}
`;
const StyledFooter = styled.div`
    padding: 2rem 1.2rem;
    display: flex;
    justify-content: flex-end;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Footer = ({ isEqual }) => (
    <StyledFooter>
        <UpdateCartBtn disabled={isEqual} type="submit">
            Update Cart
        </UpdateCartBtn>
    </StyledFooter>
);

export default Footer;
