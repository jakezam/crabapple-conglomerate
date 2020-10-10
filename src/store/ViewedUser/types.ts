export interface ViewedUserState {
  userId: string;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  providerInfo: object;
}

export type ContainerState = ViewedUserState;
