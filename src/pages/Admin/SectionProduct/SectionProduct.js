import React from 'react';

import { SectionContainer } from '../elements';
import { Products, ProductForm } from './index';

const SectionProduct = ({
    products,
    removeProduct,
    startUpdatingProduct,
    isProductsLoading
}) => {
    return (
        <SectionContainer>
            <Products
                products={products}
                removeProduct={removeProduct}
                startUpdatingProduct={startUpdatingProduct}
                isLoading={isProductsLoading}
            />
            <ProductForm />
        </SectionContainer>
    );
};

export default SectionProduct;
