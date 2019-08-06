import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCategories } from 'duck/selectors';
import { selectors, operations, utils } from './duck';
import { _Base } from 'components';
import AddCategoryForm from './AddCategoryForm';

const Container = styled.div`
    grid-column: center-start / center-end;
    min-height: 100vh;
    margin-top: 4rem;
    margin-bottom: 8.5rem;
`;

const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const SubCategories = styled.div`
    margin-left: 2rem;
`;

const mapStateToProps = state => ({
    categories: getCategories(state),
    categoriesOptions: selectors.getCategoriesOptions(state)
});

const mapDispatchToProps = dispatch => ({
    addCategory(category) {
        return dispatch(operations.addCategory(category));
    }
});

class Admin extends _Base {
    addCategory(values) {
        const { addCategory } = this.props;

        addCategory(utils.normalizeCategory(values));
    }

    render() {
        const { categories, categoriesOptions } = this.props;

        return (
            <Container>
                <Categories>
                    <div>
                        {categories.map(category => {
                            return (
                                <div key={category.slug}>
                                    {category.name}
                                    {category.subCategories && (
                                        <SubCategories>
                                            {category.subCategories.map(
                                                subCategory => {
                                                    return (
                                                        <div
                                                            key={
                                                                subCategory._id
                                                            }
                                                        >
                                                            {subCategory.name}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </SubCategories>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <AddCategoryForm
                            onSubmit={this.addCategory}
                            parentCategories={categoriesOptions}
                        />
                    </div>
                </Categories>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);
