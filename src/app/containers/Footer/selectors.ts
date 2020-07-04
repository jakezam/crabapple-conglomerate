import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.footer || initialState;

export const selectFooter = createSelector(
  [selectDomain],
  footerState => footerState,
);
