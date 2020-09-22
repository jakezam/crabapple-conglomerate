import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.sellerProfilePage || initialState;

export const selectSellerProfilePage = createSelector(
  [selectDomain],
  sellerProfilePageState => sellerProfilePageState,
);
