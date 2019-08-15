import React from 'react';

import { toUAH } from 'utils/currencyFormatters';
import { getTotalPrice } from 'pages/Cart/duck/utils';
import styled from 'styled-components';
import {
    color_grey_light,
    color_primary,
    color_secondary
} from 'styles/variables';
import A from 'elements/A';

const StyledProducts = styled.div`
    display: flex;
    flex-direction: column;
`;

const Element = styled.div`
    display: flex;
    padding: 1.5rem 0;

    border-bottom: 1px solid ${color_grey_light};
`;

const ImageContainer = styled(A)`
    width: 7rem;
    margin-right: 1.5rem;
`;

const Image = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
`;

const Description = styled.div`
    flex-grow: 1;
    display: grid;
    padding: 5px 0;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
`;

const ProductTitle = styled(A)`
    grid-column: 1/ -1;
    :link,
    :visited {
        color: ${color_secondary};
        font-weight: 600;
        line-height: 2.2rem;
        justify-self: start;
        :hover {
            color: ${color_primary};
        }
    }
`;

const ProductTotal = styled.div`
    justify-self: end;
`;

const ProductQuantity = styled.div`
    justify-self: center;
`;

const Products = ({ products, quantityByID }) => (
    <StyledProducts>
        {products.map(({ path, title, media: { url }, _id, price }) => (
            <Element key={_id}>
                <ImageContainer to={path}>
                    <Image
                        src={`https://dr-clauders-server.herokuapp.com/${url}`}
                        alt=""
                    />
                </ImageContainer>
                <Description>
                    <ProductTitle to={path}>{title}</ProductTitle>
                    <span>{toUAH(price)}</span>
                    <ProductQuantity>{quantityByID[_id]} шт.</ProductQuantity>
                    <ProductTotal>
                        <span>
                            {toUAH(getTotalPrice(price, quantityByID[_id]))}
                        </span>
                    </ProductTotal>
                </Description>
            </Element>
        ))}
    </StyledProducts>
);

export default Products;
