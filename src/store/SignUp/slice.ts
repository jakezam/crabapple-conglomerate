import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  IProviderData,
  ISelectableCategory,
  IStandardRates,
  IUserData,
  Expertise,
} from 'store/SignUp/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { FormInputs as Step2dot2Inputs } from '../../app/containers/SignUpPage/components/substeps/Step2dot2';
import { FormInputs as Step2dot3Inputs } from '../../app/containers/SignUpPage/components/substeps/Step2dot3';
import { FormInputs as Step2dot4Inputs } from '../../app/containers/SignUpPage/components/substeps/Step2dot4';
import { FormInputs as Step2dot5Inputs } from '../../app/containers/SignUpPage/components/substeps/Step2dot5';

export const initialState: ContainerState = {
  currentStep: 0, // Starts at 0
  currentSubStep: 1, // Starts at 1
  unableToCreate: false,
  creatingAccount: false,
  /* We will want to get the categories from some database via API */
  possibleMainCategories: [
    { key: 'T1', text: 'Test1', value: 'test1' },
    { key: 'T2', text: 'Test2', value: 'test2' },
    { key: 'T3', text: 'Test3', value: 'test3' },
    { key: 'T4', text: 'Test4', value: 'test4' },
  ],
  possibleSubCategories: [
    { key: 'T1', text: 'Test1', value: 'test1' },
    { key: 'T2', text: 'Test2', value: 'test2' },
    { key: 'T3', text: 'Test3', value: 'test3' },
    { key: 'T4', text: 'Test4', value: 'test4' },
  ],
  userData: {
    userId: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  },
  providerData: {
    mainCategory: '',
    subCategories: [],
    standardRate: [],
    companyTitle: '',
    expertiseLevel: Expertise.None,
    about: '',
    streetAddress: '',
    aptNum: '',
    city: '',
    state: '',
    zip: '',
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
    incrementSubStep(state: ContainerState) {
      state.currentSubStep = state.currentSubStep + 1;
    },
    decrementSubStep(state: ContainerState) {
      state.currentSubStep = state.currentSubStep - 1;
    },
    setCreatingAccount(state: ContainerState, action: PayloadAction<boolean>) {
      state.creatingAccount = action.payload;
    },
    setUnableToCreate(state: ContainerState, action: PayloadAction<boolean>) {
      state.unableToCreate = action.payload;
    },
    setExpertiseLevel(state: ContainerState, action: PayloadAction<Expertise>) {
      state.providerData.expertiseLevel = action.payload;
    },
    setPossibleMainCategories(
      state: ContainerState,
      action: PayloadAction<Array<ISelectableCategory>>,
    ) {
      state.possibleMainCategories = action.payload;
    },
    setPossibleSubCategories(
      state: ContainerState,
      action: PayloadAction<Array<ISelectableCategory>>,
    ) {
      state.possibleSubCategories = action.payload;
    },
    setUserData(state: ContainerState, action: PayloadAction<IUserData>) {
      state.userData = action.payload;
    },
    setUserId(state: ContainerState, action: PayloadAction<string>) {
      state.userData.userId = action.payload;
    },
    setStep2dot2Data(
      state: ContainerState,
      action: PayloadAction<Step2dot2Inputs>,
    ) {
      state.providerData.mainCategory = action.payload.mainWorkCategory;
      state.providerData.subCategories = action.payload.customSkills;
    },
    setStep2dot3Data(
      state: ContainerState,
      action: PayloadAction<Array<IStandardRates>>,
    ) {
      state.providerData.standardRate = action.payload;
    },
    setStep2dot4Data(
      state: ContainerState,
      action: PayloadAction<Step2dot4Inputs>,
    ) {
      state.providerData.companyTitle = action.payload.companyTitle;
      state.providerData.about = action.payload.description;
      state.providerData.expertiseLevel = action.payload.expertiseLevel;
    },
    setStep2dot5Data(
      state: ContainerState,
      action: PayloadAction<Step2dot5Inputs>,
    ) {
      state.providerData.aptNum = action.payload.aptNum;
      state.providerData.city = action.payload.city;
      state.providerData.state = action.payload.state;
      state.providerData.streetAddress = action.payload.streetAddress;
      state.providerData.zip = action.payload.zip;
    },
    setProviderData(
      state: ContainerState,
      action: PayloadAction<IProviderData>,
    ) {
      state.providerData = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = signUpSlice;
