export interface SignUpState {
  currentStep: number;
  emailAddress: string;
  password: string;
}

export type ContainerState = SignUpState;
