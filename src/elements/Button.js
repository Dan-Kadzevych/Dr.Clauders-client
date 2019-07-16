import styled from 'styled-components';

import {
    color_primary,
    color_white,
    color_secondary,
    font_secondary
} from 'styles/variables';

const StyledButton = styled.button`
    background-color: ${color_primary};
    border: none;
    padding: 1.7rem 4.5rem;
    display: inline-block;
    ${font_secondary};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${color_white};

    :focus {
        outline: none;
    }

    :hover {
        background-color: ${color_secondary};
    }
`;

export default StyledButton;
