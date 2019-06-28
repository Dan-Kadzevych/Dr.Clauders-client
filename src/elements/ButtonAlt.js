import styled from 'styled-components';

import Button from './Button';
import { font_tertiary } from 'styles/variables';

const ButtonAlt = styled(Button)`
    && {
        padding: 1.2rem 2.5rem;
        ${font_tertiary};
        font-weight: 300 !important;
        line-height: 1.5rem;
    }
`;

export default ButtonAlt;
