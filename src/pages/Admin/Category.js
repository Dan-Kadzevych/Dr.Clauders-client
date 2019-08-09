import React from 'react';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';
import get from 'lodash/get';

import { _Base, DropdownArrow, Popup } from 'components';
import { toRgba } from 'utils/utils';
import { Icon } from 'elements';
import {
    color_grey_dark_4,
    color_primary,
    color_grey_light
} from 'styles/variables';

const StyledPopup = styled(Popup)`
    grid-column-end: -1;
    align-self: stretch;
`;

const MenuIcon = styled(Icon)`
    height: 1.7rem;
    width: 1.7rem;
    display: block;
    fill: ${color_grey_dark_4};
`;

const MenuBtn = styled.span`
    visibility: hidden;
    border-left: 1px solid ${color_grey_dark_4};
    padding: 0 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;

    :hover {
        background-color: rgba(${toRgba(color_grey_light)} 0.8);
    }
`;

const Menu = styled.ul`
    list-style-type: none;
    background-color: #fff;
    border: 1px solid ${color_grey_dark_4};
    width: 150px;
    padding: 0.5rem 0;
`;

const MenuEl = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    font-size: 1.3rem;
    padding: 0 0.5rem;

    :hover {
        background-color: rgba(${toRgba(color_grey_light)} 0.3);
    }
`;

const StyledCategory = styled.div`
    border-bottom: 1px solid ${color_grey_dark_4};
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    position: relative;
    padding-left: 0.5rem;

    display: grid;
    grid-template-columns: 2rem 1fr auto;
    align-items: center;
    grid-column-gap: 0.5rem;
    cursor: pointer;

    &:hover {
        color: ${color_primary};
        background-color: rgba(${toRgba(color_grey_light)} 0.6);
        ${MenuBtn} {
            visibility: initial;
        }
    }
    //:not(:last-child) {
    //    border-bottom: none;
    //}
`;

const Name = styled.span`
    padding: 0.5rem 0;
    grid-column: 2 /3;
`;

const SubCategories = styled.div``;

const StyledSubCategory = styled(StyledCategory)`
    ${StyledCategory};
    grid-column: 1/-1;
    border: none;
    padding-left: 4rem;

    &:hover {
        color: ${color_primary};
        background-color: rgba(${toRgba(color_grey_light)} 0.3);
    }
    //:not(:last-child) {
    //    border-bottom: none;
    //}
`;

const RemoveIcon = styled(Icon)`
    height: 1rem;
    width: 1rem;
    margin-right: 1rem;
    fill: ${color_primary};
    justify-self: center;
`;

const EditIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    fill: ${color_primary};
    justify-self: center;
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
        const { category, startUpdating } = this.props;
        const { showSubcategories } = this.state;
        const path = get(category, 'path');
        const name = get(category, 'name');
        const subCategories = get(category, 'subCategories');
        const id = get(category, '_id');

        return (
            <>
                <StyledCategory key={path} onClick={this.toggleSubcategories}>
                    {!!subCategories.length && (
                        <DropdownArrow isOpen={showSubcategories} />
                    )}
                    <Name>{name}</Name>

                    <StyledPopup
                        trigger={props => (
                            <MenuBtn {...props}>
                                <MenuIcon icon="more" />
                            </MenuBtn>
                        )}
                        render={({ close }) => (
                            <Menu>
                                <MenuEl onClick={() => startUpdating(category)}>
                                    <EditIcon icon="edit" />
                                    Edit
                                </MenuEl>
                                <MenuEl
                                    onClick={e => {
                                        this.handleRemove(e, id);
                                        close(e);
                                    }}
                                >
                                    <RemoveIcon icon="close-button" />
                                    Remove
                                </MenuEl>
                            </Menu>
                        )}
                    />
                </StyledCategory>
                {!!subCategories.length && showSubcategories && (
                    <SubCategories>
                        {subCategories.map(category => {
                            const { _id, name } = category;

                            return (
                                <StyledSubCategory key={_id}>
                                    {name}
                                    <StyledPopup
                                        trigger={props => (
                                            <MenuBtn {...props}>
                                                <MenuIcon icon="more" />
                                            </MenuBtn>
                                        )}
                                        render={({ close }) => (
                                            <Menu>
                                                <MenuEl
                                                    onClick={() =>
                                                        startUpdating(category)
                                                    }
                                                >
                                                    <EditIcon icon="edit" />
                                                    Edit
                                                </MenuEl>
                                                <MenuEl
                                                    onClick={e => {
                                                        this.handleRemove(
                                                            e,
                                                            _id
                                                        );
                                                        close(e);
                                                    }}
                                                >
                                                    <RemoveIcon icon="close-button" />
                                                    Remove
                                                </MenuEl>
                                            </Menu>
                                        )}
                                    />
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
