import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getParentCategories, getCurrentLocation } from 'duck/selectors';
import { getProducts } from 'pages/Products/duck/selectors';
import { fetchProducts } from 'pages/Products/duck/operations';
import { _Base } from 'components';
import { operations, selectors } from './duck';
import SectionCategory from './SectionCategory';
import SectionProduct from './SectionProduct';

const Container = styled.div`
    grid-column: center-start / center-end;
    min-height: 100vh;
    margin-top: 4rem;
    margin-bottom: 8.5rem;

    display: flex;
    flex-direction: column;
`;

const mapStateToProps = state => ({
    categories: getParentCategories(state),
    location: getCurrentLocation(state),
    products: getProducts(state),
    isProductsLoading: selectors.isProductsViewLoading(state),
    isCategoriesLoading: selectors.isCategoriesViewLoading(state)
});

const mapDispatchToProps = dispatch => ({
    removeCategory(categoryID) {
        return dispatch(operations.removeCategory(categoryID));
    },
    startUpdatingCategory(category) {
        return dispatch(operations.startUpdatingCategory(category));
    },
    getAllProducts(filter) {
        return dispatch(fetchProducts(filter));
    },
    removeProduct(productID) {
        return dispatch(operations.removeProduct(productID));
    },
    startUpdatingProduct(product) {
        return dispatch(operations.startUpdatingProduct(product));
    },
    stopUpdatingProduct() {
        return dispatch(operations.stopUpdatingProduct());
    }
});

class Admin extends _Base {
    componentDidMount() {
        const { location, getAllProducts } = this.props;

        getAllProducts(location);
    }

    render() {
        const {
            categories,
            products,
            removeCategory,
            startUpdatingCategory,
            removeProduct,
            startUpdatingProduct,
            isProductsLoading,
            isCategoriesLoading
        } = this.props;

        return (
            <Container>
                <SectionProduct
                    products={products}
                    removeProduct={removeProduct}
                    startUpdatingProduct={startUpdatingProduct}
                    isProductsLoading={isProductsLoading}
                />
                <SectionCategory
                    categories={categories}
                    removeCategory={removeCategory}
                    startUpdatingCategory={startUpdatingCategory}
                    isCategoriesLoading={isCategoriesLoading}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
