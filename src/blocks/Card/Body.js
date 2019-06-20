import styled from 'styled-components';

import Image from './Image';

const Body = styled.div`
    margin-bottom: 2rem;
    cursor: pointer;

    :hover {
        ${Image} {
            opacity: 0.8;
        }
    }
`;

export default Body;
