import React from 'react';
import styled from 'styled-components';

import { Card } from 'blocks';
import { A, Icon } from 'elements';
import { toUAH } from 'utils/currencyFormatters';
import { color_primary, color_white } from 'styles/variables';

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

const AddedIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    fill: ${color_white};
    margin-left: 0.7rem;
`;

const LoadingIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    fill: ${color_white};
    margin-left: 0.7rem;
`;

const ProductCart = ({
    ID,
    slug,
    image,
    title,
    price,
    loading,
    added,
    handleAdd
}) => (
    <Card>
        <Card.Body to={slug}>
            <Card.Image src={`http://localhost:5000/media/${image}`} alt="" />
            <Card.Title>{title}</Card.Title>
            <Card.Price>{toUAH(price)}</Card.Price>
        </Card.Body>

        <Card.Button onClick={handleAdd} isLoading={loading} added={added}>
            Add to Cart
            {added && !loading && <AddedIcon icon="check" />}
            {loading && <LoadingIcon icon="refresh" />}
        </Card.Button>
        {added && <CartLink to="/cart">View cart</CartLink>}
    </Card>
);

export default ProductCart;
