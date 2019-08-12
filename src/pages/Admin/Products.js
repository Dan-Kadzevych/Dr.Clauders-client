import React from 'react';
import styled from 'styled-components';

import { _Base } from 'components';
import { H4 } from 'elements';
import Product from './Product';

const Container = styled.div`
    width: 70%;
`;

const ProductList = styled.ul`
    list-style-type: none;
    overflow-y: scroll;
    height: 60rem;
    padding-top: 1rem;
    padding-right: 20rem;
    margin-right: -20rem;
`;

class Products extends _Base {
    render() {
        const { products, removeProduct, startUpdating } = this.props;

        return (
            <Container>
                <H4>Продукты</H4>
                <ProductList>
                    {products.map(product => (
                        <Product
                            startUpdating={startUpdating}
                            key={product._id}
                            removeProduct={removeProduct}
                            product={product}
                        />
                    ))}
                </ProductList>
            </Container>
        );
    }
}

export default Products;
