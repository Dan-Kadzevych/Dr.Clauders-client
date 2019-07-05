import styled, { css } from 'styled-components';

import { ButtonAlt } from 'elements';
import { color_secondary } from 'styles/variables';

const CardButton = styled(ButtonAlt)`
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: ${color_secondary};
    }

    ${({ loading }) => {
        if (loading) {
            return css`
                opacity: 0.3;
            `;
        }
    }}
`;

export default CardButton;
