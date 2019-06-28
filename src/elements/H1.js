import styled from 'styled-components';

import { color_primary, font_tertiary } from 'styles/variables';

const H1 = styled.h1`
    font-size: 5rem;
    display: block;
    line-height: 7rem;
    ${font_tertiary};
    color: ${color_primary};
    font-weight: 400;
`;

export default H1;
