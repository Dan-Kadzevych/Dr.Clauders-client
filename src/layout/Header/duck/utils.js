import { css } from 'styled-components';

import { maxSubmenuItems } from './constants';

const delayTemplate = i => {
    return `
        &:nth-child(${i}) {
          transition-delay: ${90 + i * 15}ms;
         }
      `;
};

export const getSubmenuDelays = () => {
    let styles = '';

    for (let i = 2; i <= maxSubmenuItems; i++) {
        styles += delayTemplate(i);
    }

    return css`
        ${styles}
    `;
};
