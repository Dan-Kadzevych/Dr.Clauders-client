import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { color_black } from 'styles/variables';

const A = styled(Link)`
    :link,
    :visited {
        display: inline-block;
        text-decoration: none;
        color: ${color_black};
    }
`;

export default A;
