import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
    grid-column: full-start / full-end;
    background: url('https://www.dr-clauder.com/images/de/xpa2.jpg.pagespeed.ic.HhlcRypHjH.webp')
        no-repeat center/cover;
`;

const Hero = () => <StyledHero />;

export default Hero;
