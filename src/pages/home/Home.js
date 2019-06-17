import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import SectionAbout from './SectionAbout';

import { gridTemplate } from 'styles/mixins';

const StyledHome = styled.div`
    grid-column: full-start / full-end;

    ${gridTemplate}
`;

const Home = () => (
    <StyledHome>
        <Hero />
        <SectionAbout />
    </StyledHome>
);

export default Home;
