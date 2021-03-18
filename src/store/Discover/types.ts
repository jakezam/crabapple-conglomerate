export interface DiscoverState {
  userId: string;
  recentlyViewed: Array<SmallAccount>;
}

export interface SmallAccount {
  userId: string;
  username: string;
  userTag: string;
  isProvider: boolean;
  providerData: {
    category: string;
    rating: number;
    location: string;
  };
}

export type ContainerState = DiscoverState;
