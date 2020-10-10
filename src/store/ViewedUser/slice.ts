import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/ViewedUser/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '',
  firstName: '',
  lastName: '',
  isProvider: false,
  providerInfo: {},
};

const viewedUserSlice = createSlice({
  name: 'viewedUser',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = viewedUserSlice;
