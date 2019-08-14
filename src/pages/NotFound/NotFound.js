import React from 'react';
import styled from 'styled-components';

import { H2 } from 'elements';

import notFoundImg from 'images/404-image.jpg';

const Container = styled.div`
    grid-column: center-start / center-end;
    text-align: center;
    margin: 3rem 0;
    height: calc(100vh - 14rem);
`;
const Image = styled.img`
    margin-top: 1.5rem;
    width: 100%;
    max-width: 65rem;
`;

const NotFound = () => (
    <Container>
        <H2>This page is not resting, it has ceased to exist.</H2>
        <Image src={notFoundImg} />
    </Container>
);

export default NotFound;
