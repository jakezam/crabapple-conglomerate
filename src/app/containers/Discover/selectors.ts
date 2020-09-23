import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.discover || initialState;

export const selectDiscover = createSelector(
  [selectDomain],
  discoverState => discoverState,
);
