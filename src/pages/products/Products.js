import React, { Component } from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import ProductsGrid from './ProductsGrid';

import { gridTemplate } from 'styles/mixins';

const Container = styled.div`
    grid-column: full-start / full-end;
    background-color: orangered;
    text-align: center;
    color: #ffffff;

    ${gridTemplate};
    grid-template-rows: 30rem min-content;
`;

class Products extends Component {
    render() {
        return (
            <Container>
                <Hero />
                <ProductsGrid>Hello</ProductsGrid>
            </Container>
        );
    }
}

export default Products;
