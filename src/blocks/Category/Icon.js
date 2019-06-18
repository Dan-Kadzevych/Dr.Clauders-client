import styled from 'styled-components';

import { Icon } from 'elements';

import { color_primary } from 'styles/variables';

const CategoryIcon = styled(Icon)`
    grid-row: 1 / span 2;
    fill: ${color_primary};
    width: 4.5rem;
    height: 4.5rem;
    transform: translateY(-1rem);
`;

export default CategoryIcon;
