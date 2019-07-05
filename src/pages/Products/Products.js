import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Hero from './Hero';
import ProductsGrid from './ProductsGrid';
import { operations, selectors, utils } from './duck';
import { addToCart } from 'pages/Cart/duck/operations';
import {
    getIsProductAddedFunc,
    getIsProductRequestedFunc
} from 'pages/Cart/duck/selectors';

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

const mapDispatchToProps = (dispatch, { match: { url } }) => ({
    fetchProducts(categoryID) {
        return dispatch(operations.fetchProducts(categoryID, url));
    },
    addToCart(ID) {
        return dispatch(addToCart(ID));
    }
});

class Products extends Component {
    componentDidUpdate({ categoryID: prevCategoryId }) {
        const { categoryID } = this.props;

        if (prevCategoryId !== categoryID) {
            this.props.fetchProducts(categoryID);
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
