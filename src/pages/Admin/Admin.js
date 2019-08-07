import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCategories } from 'duck/selectors';
import { _Base } from 'components';
import { H4 } from 'elements';
import { selectors, operations, utils } from './duck';
import AddCategoryForm from './AddCategoryForm';
import Category from './Category';

const Container = styled.div`
    grid-column: center-start / center-end;
    min-height: 100vh;
    margin-top: 4rem;
    margin-bottom: 8.5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    align-content: start;
`;

const Categories = styled.div`
    width: 50%;
    margin-top: 1rem;
`;

const mapStateToProps = state => ({
    categories: getCategories(state),
    categoriesOptions: selectors.getCategoriesOptions(state)
});

const mapDispatchToProps = dispatch => ({
    addCategory(values) {
        const category = utils.normalizeCategory(values);

        return dispatch(operations.addCategory(category));
    },
    removeCategory(categoryID) {
        return dispatch(operations.removeCategory(categoryID));
    }
});

class Admin extends _Base {
    render() {
        const {
            categories,
            categoriesOptions,
            addCategory,
            removeCategory
        } = this.props;

        return (
            <Container>
                <div>
                    <H4>Категории</H4>
                    <Categories>
                        {categories.map(category => {
                            return (
                                <Category
                                    category={category}
                                    removeCategory={removeCategory}
                                    key={category._id}
                                />
                            );
                        })}
                    </Categories>
                </div>
                <div>
                    <AddCategoryForm
                        onSubmit={addCategory}
                        parentCategories={categoriesOptions}
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
