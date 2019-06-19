import React from 'react';
import styled from 'styled-components';

import { H2 } from 'elements';
import Category from 'blocks/Category';
import categoriesConfig from './duck/categoriesConfig';

import { gridTemplate } from 'styles/mixins';
import { color_secondary } from 'styles/variables';

const StyledSection = styled.section`
    grid-column: full-start / full-end;

    display: grid;
    grid-template-columns: ${gridTemplate};
    background-color: ${color_secondary};
    grid-row-gap: 6rem;
    padding: 4rem 0 6rem 0;
`;

const Container = styled.div`
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 6rem;
    align-items: start;
`;

const HeadingBox = styled.div`
    grid-column: center-start / center-end;

    justify-self: center;
    text-align: center;
`;

const SectionCategories = () => (
    <StyledSection>
        <HeadingBox>
            <H2>Pet Vitamin and Supplement Categories</H2>
        </HeadingBox>

        <Container>
            {categoriesConfig.map(({ title, icon, text }, i) => (
                <Category key={title + i}>
                    <Category.Icon icon={icon} />
                    <Category.Title>{title}</Category.Title>
                    <Category.Text>{text}</Category.Text>
                </Category>
            ))}
        </Container>
    </StyledSection>
);

export default SectionCategories;
