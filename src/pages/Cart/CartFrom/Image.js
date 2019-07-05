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

const Image = ({ slug, url }) => (
    <ImageWrapper to={slug}>
        <StyledImage src={`http://localhost:5000/media/${url}`} alt="" />
    </ImageWrapper>
);

export default Image;
