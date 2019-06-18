import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import SectionAbout from './SectionAbout';
import SectionCategories from './SectionCategories';
import StoryPictures from './StoryPictures';
import StoryContent from './StoryContent';

import { gridTemplate } from 'styles/mixins';

const StyledHome = styled.div`
    grid-column: full-start / full-end;

    ${gridTemplate}

    grid-template-rows: repeat(3, min-content) 40vw;
`;

const Home = () => (
    <StyledHome>
        <Hero />
        <SectionAbout />
        <SectionCategories />
        <StoryPictures />
        <StoryContent />
    </StyledHome>
);

export default Home;
