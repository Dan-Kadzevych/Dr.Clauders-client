import { css } from 'styled-components';

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
