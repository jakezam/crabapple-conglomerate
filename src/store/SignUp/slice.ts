import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, userObject } from 'store/SignUp/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  currentStep: 0,
  userCreated: {
    created: false,
    returnedUser: '',
  },
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    incrementStep(state: ContainerState) {
      state.currentStep = state.currentStep + 1;
    },
    decrementStep(state: ContainerState) {
      state.currentStep = state.currentStep - 1;
    },
    setUserCreated(state: ContainerState, action: PayloadAction<userObject>) {
      state.userCreated = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
