import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Hero from './Hero';
import ProductsGrid from './ProductsGrid';
import { operations, selectors } from './duck';

import { gridTemplate } from 'styles/mixins';

const Container = styled.div`
    grid-column: full-start / full-end;
    text-align: center;
    color: #000;

    ${gridTemplate};
    grid-template-rows: 30rem minmax(80vh, min-content);
`;

const mapStateToProps = state => ({
    products: selectors.getProducts(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProducts() {
        return dispatch(operations.fetchProducts());
    },
    setFilter(filter) {
        return dispatch(operations.setProductsFilter(filter));
    }
});

class Products extends Component {
    componentDidMount() {
        const {
            match: {
                params: { pet, category }
            }
        } = this.props;

        this.props.fetchProducts();
        this.props.setFilter(category || pet);
    }

    componentDidUpdate() {
        const {
            match: {
                params: { pet, category }
            }
        } = this.props;

        this.props.setFilter(category || pet);
    }

    render() {
        const { products } = this.props;

        return (
            <Container>
                <Hero />
                <ProductsGrid products={products} />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
