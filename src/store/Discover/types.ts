export interface DiscoverState {
  userId: string;
  pageLoading: boolean;
  searchQuery: string;
  categorySearch: boolean;
  filterByRating: boolean;
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
  name: string;
  rate: string;
}

export interface ISearchQuery {
  query: string;
  isCategory: boolean;
}

export type ContainerState = DiscoverState;
