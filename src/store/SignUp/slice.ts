import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, IUser } from 'store/SignUp/types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  currentStep: 3,
  unableToCreate: false,
  creatingAccount: false,
  userData: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
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
    setStep(state: ContainerState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setUserData(state: ContainerState, action: PayloadAction<IUser>) {
      state.userData = action.payload;
    },
    setCreatingAccount(state: ContainerState, action: PayloadAction<boolean>) {
      state.creatingAccount = action.payload;
    },
    setUnableToCreate(state: ContainerState, action: PayloadAction<boolean>) {
      state.unableToCreate = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
