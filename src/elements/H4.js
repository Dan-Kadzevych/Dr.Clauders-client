import styled from 'styled-components';

import { color_primary, font_tertiary } from 'styles/variables';

const H4 = styled.h4`
    font-size: 2.6rem;
    display: block;
    line-height: 3.6rem;
    ${font_tertiary};
    color: ${color_primary};
    font-weight: 300;
`;

export default H4;
