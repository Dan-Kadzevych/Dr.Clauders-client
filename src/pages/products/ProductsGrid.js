import React from 'react';
import styled from 'styled-components';

import Card from 'blocks/Card';

import product from 'images/product-test.png';

const Container = styled.main`
    grid-column: center-start / center-end;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    grid-gap: 5rem;
    margin: 10rem 0;
`;

const ProductsGrid = () => (
    <Container>
        <Card>
            <Card.Body to="/">
                <Card.Image src={product} alt="" />
                <Card.Title>
                    Tear Stains Remover Bundle Complete Cat and Dog
                </Card.Title>
                <Card.Price>$14.99</Card.Price>
            </Card.Body>

            <Card.Button to="/">Add to Cart</Card.Button>
        </Card>
    </Container>
);

export default ProductsGrid;
