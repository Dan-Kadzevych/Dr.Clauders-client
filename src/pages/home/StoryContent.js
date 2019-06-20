import React from 'react';
import styled from 'styled-components';

import { Button, H3, H4, P } from 'elements';

const Container = styled.div`
    grid-column: col-start 5 / full-end;

    display: grid;
    align-content: center;
    justify-items: start;
    padding: 6rem 8vw;
`;

const StoryContent = () => (
    <Container>
        <H4 className="mb-sm">Happy Customers</H4>
        <H3 className="mb-md">The best decision for your pets</H3>
        <P className="mb-md-b">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta! Quidem consequatur harum volupta!
        </P>
        <Button to="/">Become an Opt customer</Button>
    </Container>
);

export default StoryContent;
