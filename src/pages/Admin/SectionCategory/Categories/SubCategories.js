import React from 'react';

import { SubCategory } from './index';

const SubCategories = ({ subCategories, removeCategory, editCategory }) => (
    <ul>
        {subCategories &&
            !!subCategories.length &&
            subCategories.map(category => {
                const { _id, name } = category;

                return (
                    <SubCategory
                        key={_id}
                        name={name}
                        handleRemove={e => {
                            removeCategory(e, _id);
                        }}
                        handleEdit={() => editCategory(category)}
                    />
                );
            })}
    </ul>
);

export default SubCategories;
