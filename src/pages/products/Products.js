import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Hero from './Hero';
import ProductsGrid from './ProductsGrid';
import { operations, selectors, utils } from './duck';
import { addToCart } from 'pages/cart/duck/operations';
import {
    getIsProductAddedFunc,
    getIsProductRequestedFunc
} from 'pages/cart/duck/selectors';

import { gridTemplate } from 'styles/mixins';
import { color_grey_light } from 'styles/variables';

const Container = styled.div`
    grid-column: full-start / full-end;

    ${gridTemplate};
    min-height: calc(100vh - 5rem);
    align-content: start;
`;

const Results = styled.div`
    grid-column: center-start / center-end;
    margin-top: 5rem;
    color: ${color_grey_light};
`;

const mapStateToProps = state => {
    const category = selectors.getCurrentCategory(state);

    return {
        products: selectors.getProducts(state),
        categoryName: utils.getCategoryName(category),
        categoryID: utils.getCategoryID(category),
        categoryMedia: utils.getCategoryMedia(category),
        isProductRequestedFunc: getIsProductRequestedFunc(state),
        isProductAddedFunc: getIsProductAddedFunc(state)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchProducts(categoryID) {
        return dispatch(operations.fetchProducts(categoryID));
    },
    setFilter(filter) {
        return dispatch(operations.setProductsFilter(filter));
    },
    addToCart(ID) {
        return dispatch(addToCart(ID));
    }
});

class Products extends Component {
    componentDidMount() {
        const {
            match: { url },
            setFilter
        } = this.props;

        setFilter(url);
    }

    componentDidUpdate({
        categoryID: prevCategoryId,
        match: { url: prevUrl }
    }) {
        const {
            match: { url },
            categoryID
        } = this.props;

        if (prevCategoryId !== categoryID) {
            this.props.fetchProducts(categoryID);
        }

        if (url !== prevUrl) {
            this.props.setFilter(url);
        }
    }

    render() {
        const {
            products,
            categoryName,
            categoryMedia,
            addToCart,
            isProductAddedFunc,
            isProductRequestedFunc
        } = this.props;

        return (
            <Container>
                <Hero title={categoryName} media={categoryMedia} />
                <Results>Showing all {products.length} results</Results>
                <ProductsGrid
                    products={products}
                    addToCart={addToCart}
                    isAdded={isProductAddedFunc}
                    isRequested={isProductRequestedFunc}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
