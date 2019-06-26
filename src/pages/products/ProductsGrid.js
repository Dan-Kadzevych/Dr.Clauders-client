import React from 'react';
import styled from 'styled-components';

import Card from 'blocks/Card';

const Container = styled.main`
    grid-column: center-start / center-end;

    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    align-items: start;
    grid-gap: 5rem;
    margin: 10rem 0;
`;

const ProductsGrid = ({ products }) => (
    <Container>
        {products.map(({ title, price, _id, media: { url } }) => (
            <Card key={_id}>
                <Card.Body to="/">
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
