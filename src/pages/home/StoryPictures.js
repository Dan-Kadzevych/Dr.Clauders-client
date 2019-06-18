import React from 'react';
import styled from 'styled-components';

import { toRgba } from 'utils';

import { color_primary } from 'styles/variables';

import story_1 from 'images/story-1.jpg';
import story_2 from 'images/story-2.jpg';
import back from 'images/back.jpg';

const Container = styled.div`
    grid-column: full-start / col-end 4;

    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;

    background: linear-gradient(
            rgba(${toRgba(color_primary)} 0.5),
            rgba(${toRgba(color_primary)} 0.5)
        ),
        url(${back}) center/cover no-repeat;
`;

const Img1 = styled.img`
    width: 100%;
    grid-column: 2 / 6;
    grid-row: 2 / 6;
`;
const Img2 = styled.img`
    width: 110%;
    grid-column: 4 / 7;
    grid-row: 4 / 6;
`;

const StoryPictures = () => (
    <Container>
        <Img1 src={story_1} alt="Pets" />
        <Img2 src={story_2} alt="Pets" />
    </Container>
);

export default StoryPictures;
