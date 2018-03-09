import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectGlobal = (state) => state.get('global');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectUsers = () => createSelector(
  selectGlobal,
  (substate) => substate.toJS()
);

export {
  makeSelectLocation,
  makeSelectUsers,
  selectGlobal,
};
