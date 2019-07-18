import { css } from 'styled-components';

import { color_red } from './variables';

export const gridTemplate = css`
    display: grid;

    grid-template-columns:
        [full-start] minmax(6rem, 1fr) [center-start] repeat(
            8,
            [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end]
        minmax(6rem, 1fr) [full-end];
`;

export const subGridTemplate = css`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

export const borderError = css`
    border-bottom: ${({ error }) =>
        error ? `2px solid ${color_red}` : '1px solid rgba(0, 0, 0, 0.13)'};
`;
