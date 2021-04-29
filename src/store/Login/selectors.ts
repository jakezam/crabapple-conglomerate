import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/Login/slice';

const selectDomain = (state: RootState) => state.login || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectLogin = createSelector(
  [selectDomain],
  loginState => loginState,
);

export const selectLoginId = createSelector(
  [selectDomain],
  loginState => loginState.userId,
);
