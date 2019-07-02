import styled, { css } from 'styled-components';

import { ButtonAlt } from 'elements';

const CardButton = styled(ButtonAlt)`
    ${({ loading, added }) => {
        if (loading) {
            return css`
                opacity: 0.3;
            `;
        }

        if (added) {
            return css`
                background-color: #000;
            `;
        }
    }}
`;

export default CardButton;
