import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/ViewedUser/slice';

const selectDomain = (state: RootState) => state.viewedUser || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectViewedUser = createSelector(
  [selectDomain],
  viewedUserState => viewedUserState,
);
