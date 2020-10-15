export interface SignUpState {
  currentStep: number;
  unableToCreate: boolean;
  creatingAccount: boolean;
  userData: IUser;
}

export interface IUser {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

export type ContainerState = SignUpState;
