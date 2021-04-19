export interface SignUpState {
  currentStep: number;
  currentSubStep: number;
  unableToCreate: boolean;
  creatingAccount: boolean;
  unableToCreateProvider: boolean;
  creatingProviderAccount: boolean;

  possibleMainCategories: Array<ISelectableCategory>;
  possibleSubCategories: Array<ISelectableCategory>;
  userData: IUserData;
  providerData: IProviderData;
}

export interface ISelectableCategory {
  key: string;
  text: string;
  value: string;
}

export interface IUserData {
  userId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

export interface IProviderData {
  mainCategory: string;
  subCategories: Array<string>;
  standardRate: Array<IStandardRates>;
  companyTitle: string;
  expertiseLevel: Expertise;
  about: string;
  streetAddress: string;
  aptNum: string;
  city: string;
  state: string;
  zip: string;
}

export enum Expertise {
  None,
  Beginner,
  Intermediate,
  Expert,
}

export interface IAbout {}

export interface IStandardRates {
  category: string;
  flatRate: string;
  hourlyRate: string;
}

export type ContainerState = SignUpState;
