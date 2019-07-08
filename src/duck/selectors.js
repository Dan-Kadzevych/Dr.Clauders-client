import { createSelector } from 'reselect';
import { createLoadingSelector } from 'loading';
import { GET_APP_CONFIG } from './types';
import get from 'lodash/get';
import { normalizeLocations } from './utils';

const emptyArr = [];

export const isAppLoading = createLoadingSelector([GET_APP_CONFIG]);
export const getNavConfig = state =>
    get(state, 'appConfig.navConfig') || emptyArr;

export const getCurrentLocation = state =>
    get(state, 'router.location.pathname');

export const getNormalizedLocations = createSelector(
    getNavConfig,
    normalizeLocations
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
