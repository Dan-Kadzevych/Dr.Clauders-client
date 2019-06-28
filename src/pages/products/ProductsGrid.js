import React from 'react';
import styled from 'styled-components';

import Card from 'blocks/Card';

const Container = styled.main`
    grid-column: center-start / center-end;
    text-align: center;
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    align-items: start;
    grid-gap: 4rem;
    margin: 3rem 0 8rem 0;
`;

const ProductsGrid = ({ products }) => (
    <Container>
        {products.map(({ title, price, _id, media: { url }, slug }) => (
            <Card key={_id}>
                <Card.Body to={slug}>
                    <Card.Image
                        src={`http://localhost:5000/media/${url}`}
                        alt=""
                    />
                    <Card.Title>{title}</Card.Title>
                    <Card.Price>{price}</Card.Price>
                </Card.Body>

                <Card.Button>Add to Cart</Card.Button>
            </Card>
        ))}
    </Container>
);

export default ProductsGrid;
