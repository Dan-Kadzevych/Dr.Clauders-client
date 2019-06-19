import React from 'react';
import styled from 'styled-components';

import { color_secondary } from 'styles/variables';

const StyledGallery = styled.section`
    grid-column: full-start / full-end;
    background-color: ${color_secondary};

    display: grid;

    grid-template: repeat(7, 5vw) / repeat(8, 1fr);
    grid-gap: 1.5rem;
    padding: 1.5rem;

    & > div {
        :first-child {
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
            background-color: orange;
        }

        :nth-child(2) {
            grid-row: 1 / span 3;
            grid-column: 3 / span 3;
            background-color: orange;
        }
        :nth-child(3) {
            grid-row: 1 / span 2;
            grid-column: 6 / 7;
            background-color: orange;
        }
        :nth-child(4) {
            grid-row: 1 / span 2;
            grid-column: 7 / -1;
            background-color: orange;
        }
        :nth-child(5) {
            grid-row: 3 / span 3;
            grid-column: 1 / span 2;
            background-color: orange;
        }
        :nth-child(6) {
            grid-row: 4 / span 2;
            grid-column: 3 / span 2;
            background-color: orange;
        }
        :nth-child(7) {
            grid-row: 4 / 5;
            grid-column: 5 / 6;
            background-color: orange;
        }
        :nth-child(8) {
            grid-row: 3 / span 2;
            grid-column: 6 / span 2;
            background-color: orange;
        }
        :nth-child(9) {
            grid-row: 3 / span 3;
            grid-column: 8 / -1;
            background-color: orange;
        }
        :nth-child(10) {
            grid-row: 6 / span 2;
            grid-column: 1 / 2;
            background-color: orange;
        }
        :nth-child(11) {
            grid-row: 6 / span 2;
            grid-column: 2 / span 2;
            background-color: orange;
        }
        :nth-child(12) {
            grid-row: 6 / span 2;
            grid-column: 4 / 5;
            background-color: orange;
        }
        :nth-child(13) {
            grid-row: 5 / span 3;
            grid-column: 5 / span 3;
            background-color: orange;
        }
        :nth-child(14) {
            grid-row: 6 / span 2;
            grid-column: 8 / -1;
            background-color: orange;
        }

        & > img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const SectionGallery = () => (
    <StyledGallery>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </StyledGallery>
);

export default SectionGallery;
