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
const MediaFooter = styled.figure`
    display: grid;
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fit, 9rem);
    grid-column-gap: 2rem;
`;
const MediaFooterImage = styled.img`
    width: 100%;
    display: block;
`;
const Element = styled.div`
    box-shadow: 1px 1px 2px 1px rgba(210, 210, 210);
    cursor: pointer;
`;

const Media = ({ main, sub }) => (
    <StyledMedia>
        <Figure>
            <Image src={`http://localhost:5000/media/${main}`} alt="" />
            <MediaFooter>
                {sub.map(url => (
                    <Element>
                        <MediaFooterImage
                            src={`http://localhost:5000/media/${url}`}
                            alt=""
                        />
                    </Element>
                ))}
            </MediaFooter>
        </Figure>
    </StyledMedia>
);

export default Media;
