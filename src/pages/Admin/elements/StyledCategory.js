import styled from 'styled-components';

import { toRgba } from 'utils/utils';
import { StyledTrigger } from '../SectionCategory/ActionsMenu';
import {
    color_grey_dark_4,
    color_grey_light,
    color_primary
} from 'styles/variables';

const StyledCategory = styled.li`
    border-bottom: 1px solid ${color_grey_dark_4};
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    position: relative;
    padding-left: 0.5rem;

    display: grid;
    grid-template-columns: 2rem 1fr auto;
    align-items: center;
    grid-column-gap: 0.5rem;
    cursor: pointer;

    &:hover {
        color: ${color_primary};
        background-color: rgba(${toRgba(color_grey_light)} 0.6);
        ${StyledTrigger} {
            visibility: visible;
        }
    }
`;

export default StyledCategory;
