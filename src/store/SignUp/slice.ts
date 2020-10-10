import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from 'store/SignUp/types';

export const initialState: ContainerState = {
  currentStep: 0,
  emailAddress: '',
  password: '',
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
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
