import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types/index';
import { initialState } from 'store/SignUp/slice';

const selectDomain = (state: RootState) => state.signUp || initialState;
// const stepSelector = (state: RootState) =>
//   state.signUp.currentStep || initialState.currentStep;

export const selectSignUp = createSelector(
  [selectDomain],
  signUpState => signUpState,
);
export const selectUserId = createSelector(
  [selectDomain],
  signUpState => signUpState.userData.userId,
);
export const selectStep = createSelector(
  [selectDomain],
  signUpState => signUpState.currentStep,
);

export const selectSubStep = createSelector(
  [selectDomain],
  signUpState => signUpState.currentSubStep,
);

export const selectUserData = createSelector(
  [selectDomain],
  signUpState => signUpState.userData,
);

export const selectExpertiseLevel = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.expertiseLevel,
);

export const selectCompanyName = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.companyTitle,
);

export const selectCreatingProviderAccount = createSelector(
  [selectDomain],
  signUpState => signUpState.creatingProviderAccount,
);

export const selectProviderData = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData,
);

export const selectDescription = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.about,
);

export const selectStandardRates = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.standardRate,
);

export const selectPossibleMainCategories = createSelector(
  [selectDomain],
  signUpState => signUpState.possibleMainCategories,
);

export const selectPossibleSubCategories = createSelector(
  [selectDomain],
  signUpState => signUpState.possibleSubCategories,
);

export const selectUnableToCreate = createSelector(
  [selectDomain],
  signUpState => signUpState.unableToCreate,
);

export const selectMainCategory = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.mainCategory,
);

export const selectSubCategories = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.subCategories,
);

export const selectCreatingAccount = createSelector(
  [selectDomain],
  signUpState => signUpState.creatingAccount,
);

export const selectStreetAddress = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.streetAddress,
);

export const selectState = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.state,
);

export const selectAptNum = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.aptNum,
);

export const selectCity = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.city,
);

export const selectZip = createSelector(
  [selectDomain],
  signUpState => signUpState.providerData.zip,
);
