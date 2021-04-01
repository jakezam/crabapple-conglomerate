import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/Discover/slice';

const selectDomain = (state: RootState) => state.discover || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectDiscover = createSelector(
  [selectDomain],
  discoverState => discoverState,
);

export const selectResultFilter = createSelector(
  [selectDomain],
  discoverState => discoverState.filterByRating,
);
