import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from '../types';

// The initial state of the SellerProfilePage container
export const initialState: ContainerState = {};

const sellerProfilePageSlice = createSlice({
  name: 'sellerProfilePage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = sellerProfilePageSlice;
