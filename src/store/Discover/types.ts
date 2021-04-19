export interface DiscoverState {
  userId: string;
  resultsPageLoading: boolean;
  discoverPageLoading: boolean;
  categories: Array<Category>;
  categoryQuery: string;
  keywordQuery: string;
  filterByRating: boolean;
  recentlyViewed: Array<SmallAccount>;
  searchResults: Array<SmallAccount>;
}

export interface Category {
  typeId: string;
  category: string;
  description: string;
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
