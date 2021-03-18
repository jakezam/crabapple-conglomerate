export interface DiscoverState {
  userId: string;
  recentlyViewed: Array<SmallAccount>;
  searchResults: Array<SmallAccount>;
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
    skills: Array<ProviderSkills>;
  };
}

export interface ProviderSkills {
  names: Array<String>;
  rates: Array<String>;
}

export type ContainerState = DiscoverState;
