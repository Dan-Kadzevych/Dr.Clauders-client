import React from 'react';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';
import get from 'lodash/get';

import { _Base, DropdownArrow } from 'components/index';
import { SubCategories } from './index';
import { ActionsMenu } from '../index';
import { StyledCategory } from '../../elements/index';

const Name = styled.span`
    padding: 0.5rem 0;
    grid-column: 2 /3;
`;

class Category extends _Base {
    constructor(props) {
        super(props);

        this.state = {
            showSubcategories: false
        };
    }

    componentDidUpdate({ category: { subCategories: prevSubcategories } }) {
        const {
            category: { subCategories }
        } = this.props;

        if (!isEqual(subCategories, prevSubcategories)) {
            this.showSubcategories();
        }
    }

    showSubcategories() {
        this.setState({ showSubcategories: true });
    }

    toggleSubcategories() {
        const { showSubcategories } = this.state;

        this.setState({ showSubcategories: !showSubcategories });
    }

    handleRemove(e, id) {
        const { removeCategory } = this.props;

        e.stopPropagation();
        removeCategory(id);
    }

    render() {
        const { category, startUpdatingCategory } = this.props;
        const { showSubcategories } = this.state;
        const path = get(category, 'path');
        const name = get(category, 'name');
        const subCategories = get(category, 'subCategories');
        const id = get(category, '_id');

        return (
            <>
                <StyledCategory key={path} onClick={this.toggleSubcategories}>
                    {subCategories && !!subCategories.length && (
                        <DropdownArrow isOpen={showSubcategories} />
                    )}
                    <Name>{name}</Name>
                    <ActionsMenu
                        handleEdit={() => startUpdatingCategory(category)}
                        handleRemove={e => {
                            this.handleRemove(e, id);
                        }}
                    />
                </StyledCategory>
                {showSubcategories && (
                    <SubCategories
                        subCategories={subCategories}
                        editCategory={startUpdatingCategory}
                        removeCategory={this.handleRemove}
                    />
                )}
            </>
        );
    }
}

export default Category;
