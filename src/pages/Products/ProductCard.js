import React from 'react';
import styled from 'styled-components';

import { Card } from 'blocks';
import { A } from 'elements';
import { AddProductBtn } from 'components';
import { toUAH } from 'utils/currencyFormatters';
import { color_primary } from 'styles/variables';

const CartLink = styled(A)`
    :link,
    :visited {
        position: absolute;
        bottom: 1%;
        font-size: 1.3rem;
        line-height: normal;
        left: 50%;
        transform: translateX(-50%);
        color: ${color_primary};

        :hover {
            text-decoration: underline;
        }
    }
`;

const ProductCart = ({
    product: {
        _id,
        path,
        media: { url: image },
        title,
        price
    },
    loading,
    added,
    handleAdd
}) => (
    <Card>
        <Card.Body to={path}>
            <Card.Image
                src={`https://dr-clauders-server.herokuapp.com/media/${image}`}
                alt=""
            />
            <Card.Title>{title}</Card.Title>
            <Card.Price>{toUAH(price)}</Card.Price>
        </Card.Body>
        <AddProductBtn
            onClick={handleAdd}
            isLoading={loading}
            disabled={loading}
            isAdded={added}
        >
            Add to Cart
        </AddProductBtn>
        {added && <CartLink to="/cart">View cart</CartLink>}
    </Card>
);

export default ProductCart;
