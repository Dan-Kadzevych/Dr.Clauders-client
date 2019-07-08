import React from 'react';
import styled from 'styled-components';

import { Card, Spinner } from 'blocks';
import { A, Icon } from 'elements';
import { color_primary, color_white } from 'styles/variables';

const Container = styled.main`
    grid-column: center-start / center-end;
    text-align: center;
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    align-items: start;
    grid-gap: 4rem;
    margin: 3rem 0 8rem 0;
    position: relative;
    min-height: 20rem;
`;

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

const ProductsGrid = ({
    products,
    addToCart,
    isAdded,
    isRequested,
    isLoading
}) => (
    <Container>
        {!isLoading ? (
            products.map(({ title, price, _id, media: { url }, slug }) => (
                <Card key={_id}>
                    <Card.Body to={slug}>
                        <Card.Image
                            src={`http://localhost:5000/media/${url}`}
                            alt=""
                        />
                        <Card.Title>{title}</Card.Title>
                        <Card.Price>{price}</Card.Price>
                    </Card.Body>

                    <Card.Button
                        onClick={() => addToCart(_id)}
                        loading={isRequested(_id)}
                        added={isAdded(_id)}
                    >
                        Add to Cart
                        {isAdded(_id) && !isRequested(_id) && (
                            <AddedIcon icon="check" />
                        )}
                        {isRequested(_id) && <LoadingIcon icon="refresh" />}
                    </Card.Button>
                    {isAdded(_id) && <CartLink to="/cart">View cart</CartLink>}
                </Card>
            ))
        ) : (
            <Spinner />
        )}
    </Container>
);

export default ProductsGrid;
