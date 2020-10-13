export interface SignUpState {
  currentStep: number;
  userCreated: {
    created: boolean;
    returnedUser: string;
  };
}

export interface userObject {
  created: boolean;
  returnedUser: string;
}

export type ContainerState = SignUpState;
