import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { H1 } from 'elements';
import { toRgba } from 'utils/utils';
import {
    color_primary,
    color_secondary,
    color_white,
    font_secondary
} from 'styles/variables';

const Title = styled(H1)`
    color: ${color_white};
    ${font_secondary};
`;

const StyledHero = styled.section`
    grid-column: full-start / full-end;
    position: relative;

    ${({ mediaHero }) => {
        const background = get(mediaHero, 'background');
        return background
            ? css`
                background: linear-gradient(
                        rgba(${toRgba(color_primary)} 0.3),
                        rgba(${toRgba(color_primary)} 0.3)
                    ),
                    url('https://dr-clauders-server.herokuapp.com/media/${background}')
                        center/cover no-repeat;
                        height: 30rem;
                        
            `
            : css`
                  background-color: ${color_secondary};
                  color: ${color_white};
                  height: 9rem;
                  margin: 2rem 0;
                  ${Title} {
                      color: inherit;
                      font-weight: 200;
                  }
              `;
    }};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Hero = ({ title, media }) => (
    <StyledHero mediaHero={media}>
        <Title>{title}</Title>
    </StyledHero>
);

export default Hero;
