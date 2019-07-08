import { css } from 'styled-components';

import { MAX_SUB_ITEMS } from './constants';

const delayTemplate = i => {
    return `
        &:nth-child(${i}) {
          transition-delay: ${90 + i * 15}ms;
         }
      `;
};

export const getSubmenuDelays = () => {
    let styles = '';

    for (let i = 2; i <= MAX_SUB_ITEMS; i++) {
        styles += delayTemplate(i);
    }

    return css`
        ${styles}
    `;
};
