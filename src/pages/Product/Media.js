import React from 'react';
import styled from 'styled-components';

const StyledMedia = styled.div`
    grid-column: 1 / 2;
    margin-bottom: 3rem;
`;
const Image = styled.img`
    width: 100%;
`;
const Figure = styled.figure`
    display: flex;
    flex-direction: column;
`;

const Media = ({ main }) => (
    <StyledMedia>
        <Figure>
            <Image
                src={`https://dr-clauders-server.herokuapp.com/media/${main}`}
                alt=""
            />
        </Figure>
    </StyledMedia>
);

export default Media;
