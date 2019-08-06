import { createSelector } from 'reselect';
import get from 'lodash/get';

import { createLoadingSelector } from 'loading';
import { GET_MY_PROFILE } from 'pages/Account/duck/types';
import { INIT_CART } from 'pages/Cart/duck/types';
import { normalizeCategories } from './utils';
import { GET_APP_CONFIG } from './types';
import { StaticRoutes } from './constants';

const emptyObj = [];

export const isAppLoading = createLoadingSelector([
    GET_APP_CONFIG,
    GET_MY_PROFILE,
    INIT_CART
]);

export const getCategoriesByID = state =>
    get(state, 'appConfig.categoriesByID') || emptyObj;

export const getCurrentLocation = state =>
    get(state, 'router.location.pathname');

export const getCategories = createSelector(
    getCategoriesByID,
    categoriesByID => Object.values(categoriesByID)
);

export const getParentCategories = createSelector(
    getCategories,
    categories => categories.filter(category => !category.parent)
);

export const getNormalizedCategories = createSelector(
    getCategories,
    normalizeCategories
);

export const getNavConfig = createSelector(
    getCategories,
    categories => [...categories, ...StaticRoutes]
);

// export const getLocationSlugs = createSelector(
//     getNormalizedLocations,
//     locations => [...locations.map(location => location.slug), '/']
// );
//
// export const isLocationMatches = createSelector(
//     [getLocationSlugs, getCurrentLocation],
//     (locations, location) => locations.includes(location)
// );
