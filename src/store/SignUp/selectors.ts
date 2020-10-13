import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/SignUp/slice';

const selectDomain = (state: RootState) => state.signUp || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectSignUp = createSelector(
  [selectDomain],
  signUpState => signUpState,
);

export const selectStep = createSelector(
  [selectDomain],
  signUpState => signUpState.currentStep,
);

export const selectUserCreated = createSelector(
  [selectDomain],
  signUpState => signUpState.userCreated,
);
