import React from 'react';

import sprite from 'images/icons/sprite.svg';

const Icon = ({ className, icon }) => (
    <svg className={className}>
        <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
);

export default Icon;
