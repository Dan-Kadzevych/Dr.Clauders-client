import React from 'react';
import styled from 'styled-components';

import { color_secondary } from 'styles/variables';

import i1 from 'images/gallery-1.jpg';
import i2 from 'images/gallery-2.jpg';
import i3 from 'images/gallery-3.jpg';
import i4 from 'images/gallery-4.jpeg';
import i5 from 'images/gallery-5.jpg';
import i6 from 'images/gallery-6.jpg';
import i7 from 'images/gallery-7.jpg';
import i8 from 'images/gallery-8.jpg';
import i9 from 'images/gallery-9.webp';
import i10 from 'images/gallery-10.webp';
import i11 from 'images/gallery-11.jpg';
import i12 from 'images/gallery-12.jpg';
import i13 from 'images/gallery-13.jpg';
import i14 from 'images/gallery-14.jpg';

const StyledGallery = styled.section`
    grid-column: full-start / full-end;
    background-color: ${color_secondary};

    display: grid;
    margin-top: 100rem;

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
            <img src={i1} alt="" />
        </div>
        <div>
            <img src={i2} alt="" />
        </div>
        <div>
            <img src={i3} alt="" />
        </div>
        <div>
            <img src={i4} alt="" />
        </div>
        <div>
            <img src={i5} alt="" />
        </div>
        <div>
            <img src={i6} alt="" />
        </div>
        <div>
            <img src={i7} alt="" />
        </div>
        <div>
            <img src={i8} alt="" />
        </div>
        <div>
            <img src={i9} alt="" />
        </div>
        <div>
            <img src={i10} alt="" />
        </div>
        <div>
            <img src={i11} alt="" />
        </div>
        <div>
            <img src={i12} alt="" />
        </div>
        <div>
            <img src={i13} alt="" />
        </div>
        <div>
            <img src={i14} alt="" />
        </div>
    </StyledGallery>
);

export default SectionGallery;
