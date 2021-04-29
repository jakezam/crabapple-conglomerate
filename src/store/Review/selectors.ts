import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/Review/slice';

const selectDomain = (state: RootState) => state.review || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectReview = createSelector(
  [selectDomain],
  reviewState => reviewState,
);

export const selectReceivingUserId = createSelector(
  [selectDomain],
  reviewState => reviewState.receivingUserId,
);
