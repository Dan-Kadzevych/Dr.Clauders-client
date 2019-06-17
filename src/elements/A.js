import styled from 'styled-components';

import { color_black } from 'styles/abstracts/variables';

const A = styled.a`
    :link,
    :visited {
        display: inline-block;
        text-decoration: none;
        color: ${color_black};
    }
`;

export default A;
