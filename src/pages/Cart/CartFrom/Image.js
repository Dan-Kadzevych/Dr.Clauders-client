import React from 'react';
import styled from 'styled-components';

import { A } from 'elements';

const ImageWrapper = styled(A)`
    display: block;
`;
const StyledImage = styled.img`
    height: 100%;
    width: 6.4rem;
    display: block;
    margin: 0 auto;
`;

const Image = ({ path, url }) => (
    <ImageWrapper to={path}>
        <StyledImage
            src={`https://dr-clauders-server.herokuapp.com/${url}`}
            alt=""
        />
    </ImageWrapper>
);

export default Image;
