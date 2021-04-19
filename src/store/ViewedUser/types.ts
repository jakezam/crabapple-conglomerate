export interface ViewedUserState {
  userId: string;
  isLoading: boolean;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  isSelf: boolean;
  providersInArea: Array<SubProfile>;
  providerInfo: ProviderAddition;
  reviews: Array<Review>;
  notFound: boolean;
}

export interface ProviderAddition {
  companyName: string;
  about: string;
  category: string;
  subcategories: Array<SubCategory>;
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

export interface SubCategory {
  subcategory: string;
  hourlyRate: number;
  flatRate: number;
  consultationFees: number;
}

export type ContainerState = ViewedUserState;
