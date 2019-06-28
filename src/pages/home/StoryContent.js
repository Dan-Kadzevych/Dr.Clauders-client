import React from 'react';
import styled from 'styled-components';

import { Button, H3, H4 } from 'elements';
import { font_secondary } from 'styles/variables';

const Container = styled.div`
    grid-column: col-start 5 / full-end;

    display: grid;
    align-content: center;
    justify-items: start;
    padding: 6rem 8vw;
`;

const HeadingMain = styled(H3)`
    ${font_secondary};
`;
const HeadingSub = styled(H4)`
    ${font_secondary};
`;

const StoryContent = () => (
    <Container>
        <HeadingSub className="mb-sm-s">Happy Customers</HeadingSub>
        <HeadingMain className="mb-md">
            The best decision for your pets
        </HeadingMain>
        <p className="mb-md-b">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta! Quidem consequatur harum volupta!
        </p>
        <Button to="/">Become an Opt customer</Button>
    </Container>
);

export default StoryContent;
