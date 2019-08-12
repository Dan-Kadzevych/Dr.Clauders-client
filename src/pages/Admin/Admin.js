import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import styled from 'styled-components';

import { getParentCategories, getCurrentLocation } from 'duck/selectors';
import { getProducts } from 'pages/Products/duck/selectors';
import { fetchProducts } from 'pages/Products/duck/operations';
import { _Base } from 'components';
import { H4 } from 'elements';
import { selectors, operations, utils } from './duck';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import Category from './Category';
import Products from './Products';

const categoryFormSelector = formValueSelector('category');

const Container = styled.div`
    grid-column: center-start / center-end;
    min-height: 100vh;
    margin-top: 4rem;
    margin-bottom: 8.5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    align-content: start;
`;

const DataContainer = styled.div`
    width: 70%;
    margin-top: 1rem;
`;

const mapStateToProps = state => ({
    categories: getParentCategories(state),
    parentCategoriesOptions: selectors.getParentCategoriesOptions(state),
    categoriesOptions: selectors.getCategoriesOptions(state),
    updatedCategory: selectors.getUpdatedCategory(state),
    categoryInitialValues: selectors.getCategoryInitialValues(state),
    location: getCurrentLocation(state),
    products: getProducts(state),
    updatedProduct: selectors.getUpdatedProduct(state),
    productInitialValues: selectors.getProductInitialValues(state),
    categoryParent: categoryFormSelector(state, 'parent.value')
});

const mapDispatchToProps = dispatch => ({
    addCategory(values) {
        const category = utils.normalizeCategory(values);

        return dispatch(operations.addCategory(category));
    },
    updateCategory(
        values,
        dispatch,
        {
            updatedCategory: { _id: categoryID }
        }
    ) {
        const category = utils.normalizeCategory(values);

        return dispatch(operations.updateCategory(categoryID, category));
    },
    removeCategory(categoryID) {
        return dispatch(operations.removeCategory(categoryID));
    },
    startUpdatingCategory(category) {
        return dispatch(operations.startUpdatingCategory(category));
    },
    stopUpdatingCategory() {
        return dispatch(operations.stopUpdatingCategory());
    },
    getAllProducts(filter) {
        return dispatch(fetchProducts(filter));
    },
    addProduct(values) {
        const normalizeProduct = utils.normalizeProduct(values);

        return dispatch(operations.addProduct(normalizeProduct));
    },
    updateProduct(
        values,
        dispatch,
        {
            updatedProduct: { _id: productID }
        }
    ) {
        const product = utils.normalizeProduct(values);

        return dispatch(operations.updateProduct(productID, product));
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
            parentCategoriesOptions,
            categoriesOptions,
            addCategory,
            updateCategory,
            removeCategory,
            updatedCategory,
            updatedProduct,
            categoryParent,
            categoryInitialValues,
            startUpdatingCategory,
            stopUpdatingCategory,
            products,
            addProduct,
            updateProduct,
            removeProduct,
            productInitialValues,
            startUpdatingProduct,
            stopUpdatingProduct
        } = this.props;

        return (
            <Container>
                <Products
                    startUpdating={startUpdatingProduct}
                    removeProduct={removeProduct}
                    products={products}
                />
                <div>
                    <ProductForm
                        updatedProduct={updatedProduct}
                        stopUpdating={stopUpdatingProduct}
                        initialValues={productInitialValues}
                        onSubmit={updatedProduct ? updateProduct : addProduct}
                        categories={categoriesOptions}
                    />
                </div>
                <div>
                    <H4>Категории</H4>
                    <DataContainer>
                        {categories.map(category => {
                            return (
                                <Category
                                    category={category}
                                    removeCategory={removeCategory}
                                    key={category._id}
                                    startUpdating={startUpdatingCategory}
                                />
                            );
                        })}
                    </DataContainer>
                </div>

                <div>
                    <CategoryForm
                        updatedCategory={updatedCategory}
                        stopUpdating={stopUpdatingCategory}
                        initialValues={categoryInitialValues}
                        onSubmit={
                            updatedCategory ? updateCategory : addCategory
                        }
                        categoryParent={categoryParent}
                        parentCategories={parentCategoriesOptions}
                    />
                </div>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
