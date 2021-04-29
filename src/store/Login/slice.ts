import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/Login/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  userId: '1',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeId(state: ContainerState, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
