import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'app/containers/SignInPage/types';

// The initial state of the SignInPage container
export const initialState: ContainerState = {};

const signInPageSlice = createSlice({
  name: 'signinPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = signInPageSlice;
