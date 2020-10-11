export interface ViewedUserState {
  userId: string;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  isSelf: boolean;
  numFollowing: number;
  followerCount: number;
  isFollowing: boolean;
  providerInfo: {
    companyName: string;
    websiteURL: string;
    category: string;
    subcategories: {};
    rating: number;
    location: string;
  };
}

export type ContainerState = ViewedUserState;
