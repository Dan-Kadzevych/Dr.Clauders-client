import React from 'react';
import styled from 'styled-components';

import { H4 } from 'elements';
import { Spinner } from 'blocks';
import { Category } from './index';

const Container = styled.div`
    width: 70%;
    position: relative;
    min-height: 10rem;
`;

const Categories = ({
    categories,
    removeCategory,
    startUpdatingCategory,
    isLoading
}) => (
    <Container>
        {isLoading && <Spinner />}
        <H4> Категории</H4>
        <ul>
            {categories.map(category => (
                <Category
                    category={category}
                    removeCategory={removeCategory}
                    key={category._id}
                    startUpdatingCategory={startUpdatingCategory}
                />
            ))}
        </ul>
    </Container>
);

export default Categories;
