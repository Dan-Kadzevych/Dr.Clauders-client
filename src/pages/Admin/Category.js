import React from 'react';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';

import { _Base, DropdownArrow } from 'components';
import { Icon, ButtonAlt } from 'elements';
import { color_grey_dark_4, color_primary } from 'styles/variables';

const StyledCategory = styled.div`
    padding: 0.5rem;
    border-bottom: 3px solid ${color_grey_dark_4};
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    position: relative;

    display: grid;
    grid-template-columns: 1fr repeat(2, 2rem);
    align-items: center;

    &:hover {
        color: ${color_primary};
        background-color: #aacfff;
    }
    //:not(:last-child) {
    //    border-bottom: none;
    //}
`;

const SubCategories = styled.div``;

const StyledSubCategory = styled(StyledCategory)`
    ${StyledCategory};
    grid-column: 1/-1;
    border-bottom: 1px solid ${color_grey_dark_4};
    border-top: none;
    padding-left: 2rem;

    &:hover {
        color: ${color_primary};
        background-color: rgba(184, 229, 255, 0.32);
    }
    //:not(:last-child) {
    //    border-bottom: none;
    //}
`;

const RemoveButton = styled(ButtonAlt)`
    background-color: transparent;
    padding: 0.5rem !important;
    grid-column-end: -1;
    justify-self: end;
    :hover {
        background-color: transparent;
    }
`;

const RemoveIcon = styled(Icon)`
    height: 1rem;
    width: 1rem;
    fill: ${color_primary};
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
        const {
            category: {
                slug: { full: fullSlug },
                name,
                subCategories,
                _id
            }
        } = this.props;
        const { showSubcategories } = this.state;

        return (
            <>
                <StyledCategory
                    key={fullSlug}
                    onClick={this.toggleSubcategories}
                >
                    {name}
                    {!!subCategories.length && (
                        <DropdownArrow isOpen={showSubcategories} />
                    )}
                    <RemoveButton onClick={e => this.handleRemove(e, _id)}>
                        <RemoveIcon icon="close-button" />
                    </RemoveButton>
                </StyledCategory>
                {!!subCategories.length && showSubcategories && (
                    <SubCategories>
                        {subCategories.map(({ _id, name }) => {
                            return (
                                <StyledSubCategory key={_id}>
                                    {name}
                                    <RemoveButton
                                        onClick={e => this.handleRemove(e, _id)}
                                    >
                                        <RemoveIcon icon="close-button" />
                                    </RemoveButton>
                                </StyledSubCategory>
                            );
                        })}
                    </SubCategories>
                )}
            </>
        );
    }
}

export default Category;
