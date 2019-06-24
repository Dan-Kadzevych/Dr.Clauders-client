import { catsConfig, dogsConfig } from './navConfig';

export const MAX_SUB_ITEMS = Math.max(catsConfig.length, dogsConfig.length);

export const LINK_STATES = {
    ACTIVE: 'ACTIVE',
    MATCHED: 'MATCHED',
    PASSIVE: 'PASSIVE'
};
