export interface ReviewState {
  receivingUserId: string;
  username: string;
  rating: number;
  header: string;
  description: string;
  isRecommending: boolean;
  leftReview: boolean;
  isLoading: boolean;
  currReviews: Array<Review>;
}

export interface Review {
  reviewId: number;
  username: string;
  rating: number;
  title: string;
  message: string;
  date: string;
  wouldRecommend: boolean;
}

export type ContainerState = ReviewState;
