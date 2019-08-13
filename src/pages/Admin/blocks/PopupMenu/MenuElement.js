import React from 'react';
import styled from 'styled-components';

import { Icon } from 'elements/index';
import { toRgba } from 'utils/utils';
import { color_grey_light, color_primary } from 'styles/variables';

const StyledElement = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    font-size: 1.3rem;
    padding: 0 0.5rem;
    cursor: pointer;

    :hover {
        background-color: rgba(${toRgba(color_grey_light)} 0.3);
    }
`;

const StyledIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    fill: ${color_primary};
    justify-self: center;
`;

const MenuElement = ({ handleClick, icon, text }) => (
    <StyledElement onClick={handleClick}>
        <StyledIcon icon={icon} />
        {text}
    </StyledElement>
);

export default MenuElement;
