import React from 'react';
import styled from 'styled-components';

import { Spinner } from 'blocks';
import ProductCard from './ProductCard';

const Container = styled.main`
    grid-column: center-start / center-end;
    text-align: center;
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    align-items: start;
    grid-gap: 4rem;
    margin: 3rem 0 8rem 0;
    position: relative;
    min-height: 20rem;
`;

const ProductsGrid = ({
    products,
    addToCart,
    isAdded,
    isRequested,
    isLoading
}) => (
    <Container>
        {!isLoading ? (
            products.map(product => (
                <ProductCard
                    key={product._id}
                    loading={isRequested(product._id)}
                    added={isAdded(product._id)}
                    handleAdd={() => addToCart(product._id)}
                    product={product}
                />
            ))
        ) : (
            <Spinner />
        )}
    </Container>
);

export default ProductsGrid;
