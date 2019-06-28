import styled from 'styled-components';

import { A } from 'elements';
import Image from './Image';

const Body = styled(A)`
    margin-bottom: 1.5rem;
    cursor: pointer;

    :hover {
        ${Image} {
            opacity: 0.8;
        }
    }
`;

export default Body;
