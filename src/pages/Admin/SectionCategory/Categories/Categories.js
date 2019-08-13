import React from 'react';
import styled from 'styled-components';

import { H4 } from 'elements/index';
import { Category } from './index';

const Container = styled.div`
    width: 75%;
`;

const Categories = ({ categories, removeCategory, startUpdatingCategory }) => (
    <Container>
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
