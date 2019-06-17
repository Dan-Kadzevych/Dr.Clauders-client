import React from 'react';
import styled from 'styled-components';

import { Button, H1, P } from 'elements';

const StyledSection = styled.section`
    grid-column: center-start / center-end;
    margin: 5rem 0;
    text-align: center;
`;

const HeadingMain = styled.span`
    font-weight: 200;
    display: block;
`;

const HeadingSub = styled.strong`
    font-weight: 800;
    display: block;
`;

const SectionAbout = () => (
    <StyledSection>
        <H1>
            <HeadingMain>Pet Vitamins and Supplements for a</HeadingMain>
            <HeadingSub>Long and Healthy Life</HeadingSub>
        </H1>
        <P>
            Keeping your dog or cat happy and healthy isn't always easy,
            especially as they start to age. Healthy Solutions for Pets offers a
            special veterinarian formulated line of pet vitamins and supplements
            to improve your pets overall well-being and help ensure a long and
            healthy life.
        </P>
        <Button className="mt-sm" href="#">
            View Our Pet Vitamins and Supplements
        </Button>
    </StyledSection>
);

export default SectionAbout;
