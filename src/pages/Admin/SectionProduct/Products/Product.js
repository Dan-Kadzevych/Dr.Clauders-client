import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import { _Base, Popup } from 'components/index';
import { A } from 'elements/index';
import { PopupMenu } from '../../blocks/index';
import {
    color_grey_light,
    color_primary,
    color_secondary
} from 'styles/variables';

const TitleLink = styled(A)`
    :link,
    :visited {
        color: ${color_primary};
    }

    :hover {
        color: ${color_secondary};
    }
`;

const ImageLink = styled(A)`
    :hover {
        img {
            opacity: 0.7;
        }
    }
`;

const StyledPopup = styled(Popup)`
    align-self: start;
    justify-self: end;
`;

const StyledProduct = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid ${color_grey_light};

    display: grid;
    grid-template-columns: 8rem 1fr 5rem;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 100%;

    display: block;
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
                        <ImageLink to={path}>
                            <StyledImage
                                src={`http://localhost:5000/media/${image}`}
                                alt=""
                            />
                        </ImageLink>
                    </div>

                    <div>
                        <TitleLink to={path}>{title}</TitleLink>
                    </div>

                    <StyledPopup
                        trigger={props => <PopupMenu.Trigger {...props} />}
                        render={({ close }) => (
                            <PopupMenu>
                                <PopupMenu.Element
                                    handleClick={e => {
                                        startUpdating(product);
                                        close(e);
                                    }}
                                    icon="edit"
                                    text="Редактировать"
                                />
                                <PopupMenu.Element
                                    handleClick={e => {
                                        removeProduct(ID);
                                        close(e);
                                    }}
                                    icon="close-button"
                                    text="Удалить"
                                />
                            </PopupMenu>
                        )}
                    />
                </StyledProduct>
            </>
        );
    }
}

export default Product;
