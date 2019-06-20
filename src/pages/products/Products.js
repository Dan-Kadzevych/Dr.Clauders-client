import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import ProductsGrid from './ProductsGrid';

import { gridTemplate } from 'styles/mixins';

const Container = styled.div`
    grid-column: full-start / full-end;
    text-align: center;
    color: #000;

    ${gridTemplate};
    grid-template-rows: 30rem min-content;
`;

class Products extends Component {
    render() {
        return (
            <Container>
                <Hero />
                <ProductsGrid />
            </Container>
        );
    }
}

export default Products;
