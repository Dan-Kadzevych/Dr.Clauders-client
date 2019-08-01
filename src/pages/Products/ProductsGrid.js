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
            products.map(({ title, price, _id, media: { url }, slug }) => (
                <ProductCard
                    key={_id}
                    ID={_id}
                    image={url}
                    slug={slug}
                    price={price}
                    title={title}
                    loading={isRequested(_id)}
                    added={isAdded(_id)}
                    handleAdd={() => addToCart(_id)}
                />
            ))
        ) : (
            <Spinner />
        )}
    </Container>
);

export default ProductsGrid;
