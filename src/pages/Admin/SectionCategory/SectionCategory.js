import React from 'react';

import { SectionContainer } from '../elements';
import { Categories, CategoryForm } from './index';

const SectionCategory = ({
    categories,
    removeCategory,
    startUpdatingCategory
}) => {
    return (
        <SectionContainer>
            <Categories
                categories={categories}
                removeCategory={removeCategory}
                startUpdatingCategory={startUpdatingCategory}
            />
            <CategoryForm />
        </SectionContainer>
    );
};

export default SectionCategory;
