import styled from 'styled-components';

import { P } from 'elements';

import { color_grey_dark } from 'styles/variables';

const Text = styled(P)`
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    color: ${color_grey_dark};
`;

export default Text;
