export interface ViewedUserState {
  userId: number;
  isLoading: boolean;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  isSelf: boolean;
  numFollowing: number;
  followerCount: number;
  isFollowing: boolean;
  accountsInArea: Array<SubProfile>;
  providersInArea: Array<SubProfile>;
  providerInfo: ProviderAddition;
  reviews: Array<Review>;
  totalReviews: number;
  notFound: boolean;
}

export interface ProviderAddition {
  companyName: string;
  websiteURL: string;
  category: string;
  subcategories: Array<string>;
  rating: number;
  location: string;
  otherCategoryAccounts: Array<SubProfile>;
  previousJobs: Array<SubProfile>;
}

export interface Review {
  username: string;
  rating: number;
  title: string;
  message: string;
  date: string;
  wouldRecommend: boolean;
  numLikes: number;
  numDislikes: number;
  // userLiked: boolean;
  // userDisliked: boolean;
}

export interface SubProfile {
  userId: string;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  providerInfo: {
    companyName: string;
    category: string;
    rating: number;
  };
  profileTag: string;
}

export type ContainerState = ViewedUserState;
