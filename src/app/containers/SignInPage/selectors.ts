import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.signinPage || initialState;

export const selectSignInPage = createSelector(
  [selectDomain],
  signInPageState => signInPageState,
);
