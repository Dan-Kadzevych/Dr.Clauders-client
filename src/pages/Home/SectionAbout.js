import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button, H1 } from 'elements';
import { font_secondary } from 'styles/variables';

const StyledSection = styled.section`
    grid-column: center-start / center-end;

    margin: 5rem 0;
    text-align: center;
`;

const Heading = styled(H1)`
    ${font_secondary};
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
        <Heading className="mb-sm-s">
            <HeadingMain>Pet Vitamins and Supplements for a</HeadingMain>
            <HeadingSub>Long and Healthy Life</HeadingSub>
        </Heading>
        <p>
            Keeping your dog or cat happy and healthy isn't always easy,
            especially as they start to age. Healthy Solutions for Pets offers a
            special veterinarian formulated line of pet vitamins and supplements
            to improve your pets overall well-being and help ensure a long and
            healthy life.
        </p>
        <Link to="/pet-supplements/dog-supplements">
            <Button className="mt-md" to="/">
                View Our Pet Vitamins and Supplements
            </Button>
        </Link>
    </StyledSection>
);

export default SectionAbout;
