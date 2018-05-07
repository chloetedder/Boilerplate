/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectEnjoy = () => createSelector(
  selectHome,
  (homeState) => homeState.get('enjoy')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectEnjoy,
};
