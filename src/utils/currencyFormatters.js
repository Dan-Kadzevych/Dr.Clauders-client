import numeral from 'numeral';

export const toUAH = value => numeral(value).format('0, 0');
