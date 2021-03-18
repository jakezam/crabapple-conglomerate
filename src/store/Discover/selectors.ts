import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/Jobs/slice';

const selectDomain = (state: RootState) => state.jobs || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectJobs = createSelector(
  [selectDomain],
  jobsState => jobsState,
);
