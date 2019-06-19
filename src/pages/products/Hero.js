import React from 'react';
import styled from 'styled-components';

import { toRgba } from 'utils';

import { H1 } from 'elements';
import { color_primary, color_white } from 'styles/variables';

const StyledHero = styled.section`
    grid-column: full-start / full-end;

    background: linear-gradient(
            rgba(${toRgba(color_primary)} 0.3),
            rgba(${toRgba(color_primary)} 0.3)
        ),
        url('https://healthy-solutions-for-pets-d9ai1w0.netdna-ssl.com/wp-content/uploads/2018/02/dog-supplements-header.jpg')
            center/cover no-repeat;
    line-height: 30rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled(H1)`
    color: ${color_white};
`;

const Hero = () => (
    <StyledHero>
        <Title>Dog Supplements</Title>
    </StyledHero>
);

export default Hero;
