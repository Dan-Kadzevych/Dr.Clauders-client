import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCategories } from 'duck/selectors';
import { _Base } from 'components';
import { H4 } from 'elements';
import { selectors, operations, utils } from './duck';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import Category from './Category';

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

const Categories = styled.div`
    width: 70%;
    margin-top: 1rem;
`;

const mapStateToProps = state => ({
    categories: getCategories(state),
    parentCategoriesOptions: selectors.getParentCategoriesOptions(state),
    categoriesOptions: selectors.getCategoriesOptions(state),
    updatedCategory: selectors.getUpdatedCategory(state),
    categoryInitialValues: selectors.getCategoryInitialValues(state)
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
    addProduct(values) {
        const normalizeProduct = utils.normalizeProduct(values);

        return dispatch(operations.addProduct(normalizeProduct));
    }
});

class Admin extends _Base {
    render() {
        const {
            categories,
            parentCategoriesOptions,
            categoriesOptions,
            addCategory,
            updateCategory,
            removeCategory,
            updatedCategory,
            categoryInitialValues,
            startUpdatingCategory,
            stopUpdatingCategory,
            addProduct
        } = this.props;

        return (
            <Container>
                <div>
                    <H4>Продукты</H4>
                </div>
                <div>
                    <ProductForm
                        updatedProduct={null}
                        stopUpdating={() => {}}
                        initialValues={{}}
                        onSubmit={addProduct}
                        categories={categoriesOptions}
                    />
                </div>
                <div>
                    <H4>Категории</H4>
                    <Categories>
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
                    </Categories>
                </div>

                <div>
                    <CategoryForm
                        updatedCategory={updatedCategory}
                        stopUpdating={stopUpdatingCategory}
                        initialValues={categoryInitialValues}
                        onSubmit={
                            updatedCategory ? updateCategory : addCategory
                        }
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
