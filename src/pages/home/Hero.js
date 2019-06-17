import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
    grid-column: full-start / full-end;
    height: 37vw;
    background: url('https://healthy-solutions-for-pets-d9ai1w0.netdna-ssl.com/wp-content/uploads/2018/03/HSFP-banner-girl-with-dog.jpg')
        no-repeat center top/cover;
`;

const Hero = () => <StyledHero />;

export default Hero;
