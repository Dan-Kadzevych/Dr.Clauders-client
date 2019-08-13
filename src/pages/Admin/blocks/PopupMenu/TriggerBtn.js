import React from 'react';
import styled from 'styled-components';

import { toRgba } from 'utils/utils';
import { color_grey_dark_4, color_grey_light } from 'styles/variables';
import Icon from 'elements/Icon';

const StyledBtn = styled.span`
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-self: center;
    height: 100%;

    :hover {
        background-color: rgba(${toRgba(color_grey_light)} 0.8);
    }
`;

const StyledIcon = styled(Icon)`
    height: 1.7rem;
    width: 1.7rem;
    display: block;
    fill: ${color_grey_dark_4};
`;

const TriggerBtn = props => (
    <StyledBtn {...props}>
        <StyledIcon icon="more" />
    </StyledBtn>
);

export default TriggerBtn;
