import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import { _Base, Popup } from 'components';
import { A } from 'elements';
import { toRgba } from 'utils/utils';
import {
    color_grey_dark_4,
    color_grey_light,
    color_primary
} from 'styles/variables';
import Icon from 'elements/Icon';

const StyledPopup = styled(Popup)`
    align-self: start;
    justify-self: end;
`;

const StyledProduct = styled.li`
    display: grid;
    grid-template-columns: 10rem 1fr 5rem;
    padding: 1rem 0;
    align-items: center;
    border-bottom: 1px solid ${color_grey_light};
`;

const MenuIcon = styled(Icon)`
    height: 1.7rem;
    width: 1.7rem;
    display: block;
    fill: ${color_grey_dark_4};
`;

const MenuBtn = styled.span`
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-self: center;
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
    cursor: pointer;

    :hover {
        background-color: rgba(${toRgba(color_grey_light)} 0.3);
    }
`;

const StyledImage = styled.img`
    width: 100%;

    display: block;
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

class Product extends _Base {
    render() {
        const { product, removeProduct, startUpdating } = this.props;
        const path = get(product, 'path');
        const title = get(product, 'title');
        const ID = get(product, '_id');
        const image = get(product, 'media.url');

        return (
            <>
                <StyledProduct key={path}>
                    <div>
                        <A to={path}>
                            <StyledImage
                                src={`http://localhost:5000/media/${image}`}
                                alt=""
                            />
                        </A>
                    </div>

                    <div>
                        <A to={path}>{title}</A>
                    </div>
                    <StyledPopup
                        trigger={props => (
                            <MenuBtn {...props}>
                                <MenuIcon icon="more" />
                            </MenuBtn>
                        )}
                        render={({ close }) => (
                            <Menu>
                                <MenuEl onClick={() => startUpdating(product)}>
                                    <EditIcon icon="edit" />
                                    Edit
                                </MenuEl>
                                <MenuEl onClick={() => removeProduct(ID)}>
                                    <RemoveIcon icon="close-button" />
                                    Remove
                                </MenuEl>
                            </Menu>
                        )}
                    />
                </StyledProduct>
            </>
        );
    }
}

export default Product;
