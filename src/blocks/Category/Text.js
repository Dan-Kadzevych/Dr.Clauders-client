import styled from 'styled-components';

import { P } from 'elements';

import { color_grey_dark, font_secondary } from 'styles/variables';

const Text = styled(P)`
    ${font_secondary};
    font-weight: 300;
    color: ${color_grey_dark};
`;

export default Text;
