import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.settings || initialState;

export const selectSettings = createSelector(
  [selectDomain],
  settingsState => settingsState,
);
