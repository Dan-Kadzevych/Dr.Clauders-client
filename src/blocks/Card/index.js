import styled from 'styled-components';

import Image from './Image';
import Price from './Price';
import Button from './Button';
import Body from './Body';
import Title from './Title';

const Card = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2.5rem;
`;

Card.Image = Image;
Card.Price = Price;
Card.Button = Button;
Card.Body = Body;
Card.Title = Title;

export default Card;
