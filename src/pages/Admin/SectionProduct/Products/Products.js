import React from 'react';
import styled from 'styled-components';

import { H4 } from 'elements/index';
import { Product } from './index';

const Container = styled.div`
    width: 75%;
`;

const ProductList = styled.ul`
    overflow-y: scroll;
    max-height: 60rem;
    padding: 1rem;
`;

const Products = ({ products, removeProduct, startUpdatingProduct }) => (
    <Container>
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
