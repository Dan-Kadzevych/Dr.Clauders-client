import React from 'react';
import styled from 'styled-components';

import Card from 'blocks/Card';

import product from 'images/product-test.png';

const Container = styled.main`
    grid-column: center-start / center-end;

    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

    grid-gap: 5rem;
    margin: 10rem 0;
`;

const ProductsGrid = ({ products }) => (
    <Container>
        {products.map(({ title, price, _id }) => (
            <Card key={_id}>
                <Card.Body to="/">
                    <Card.Image src={product} alt="" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Price>{price}</Card.Price>
                </Card.Body>

                <Card.Button to="/">Add to Cart</Card.Button>
            </Card>
        ))}
    </Container>
);

export default ProductsGrid;
