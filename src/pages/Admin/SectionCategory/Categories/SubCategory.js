import React from 'react';
import styled from 'styled-components';

import { toRgba } from 'utils/utils';
import { ActionsMenu } from '../index';
import { StyledCategory } from '../../elements';
import { color_grey_light, color_primary } from 'styles/variables';

const Name = styled.span`
    font-size: 1.4rem;
`;

const StyledSubCategory = styled(StyledCategory)`
    ${StyledCategory};
    grid-column: 1/-1;
    border: none;
    padding-left: 4rem;

    &:hover {
        color: ${color_primary};
        background-color: rgba(${toRgba(color_grey_light)} 0.3);
    }
`;

const SubCategory = ({ name, handleEdit, handleRemove }) => (
    <StyledSubCategory>
        <Name>{name}</Name>
        <ActionsMenu handleEdit={handleEdit} handleRemove={handleRemove} />
    </StyledSubCategory>
);

export default SubCategory;
