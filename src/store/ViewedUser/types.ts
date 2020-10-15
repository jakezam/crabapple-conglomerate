export interface ViewedUserState {
  userId: string;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  isSelf: boolean;
  numFollowing: number;
  followerCount: number;
  isFollowing: boolean;
  providerInfo: ProviderAddition;
  reviews: Array<Review>;
  totalReviews: number;
}

export interface ProviderAddition {
  companyName: string;
  websiteURL: string;
  category: string;
  subcategories: Array<string>;
  rating: number;
  location: string;
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
    rating: number;
  };
}

export type ContainerState = ViewedUserState;
