import React from 'react';
import styled from 'styled-components';

import { H4 } from 'elements';
import { Spinner } from 'blocks';
import { Product } from './index';

const Container = styled.div`
    width: 80%;
    position: relative;
    min-height: 10rem;
`;

const ProductList = styled.ul`
    overflow-y: scroll;
    max-height: 60rem;
    padding: 1rem;
`;

const Products = ({
    products,
    removeProduct,
    startUpdatingProduct,
    isLoading
}) => (
    <Container>
        {isLoading && <Spinner />}
        <H4>Продукты</H4>
        <ProductList>
            {products.map(product => (
                <Product
                    startUpdating={startUpdatingProduct}
                    key={product._id}
                    removeProduct={removeProduct}
                    product={product}
                />
            ))}
        </ProductList>
    </Container>
);

export default Products;
